# Good night, sweet prince.

require 'rubygems'

task :default => [:serv]

desc "Commit and push to deploy"
task :deploy do 
  require 'git'
  g = Git.init 
  g.add('.')
  m = Time.new.strftime('%Y/%m/%d %h:%m:%s - autodeploy')
  g.commit(m)
  puts "Committed #{m} version"
  g.push
  puts "and sent it to the interwebs"
end

desc "Rev your engines"
task :serv do 
  puts "Go-go gadget hackerblog!"
  system('jekyll --server')
end

namespace "posts" do
  desc "Force update of tapir"
  task :force_update_tapir do     
    require 'jekyll'
    require 'rest-client'
    require 'json'
    
    # Public project, secret key. Don't even try and find it, interwebs. :{)
    push_url = "http://tapirgo.com/api/1/push_article?secret=#{File.open("./.secretkey").read}"
    
    options = {}
    options = Jekyll.configuration(options)
    site = Jekyll::Site.new(options)
    site.read_posts('.')

    site.posts.each do |post|
      summary = "Read this at Notes on Camp"
	    summary = post.to_liquid['summary'] unless post.to_liquid['summary'] == 'first'
      payload = {}
      payload = {:link => "http://notesoncamp.com" + post.url, :title => post.data['title'], :summary => "<![CDATA[#{ summary }]]>", :content => "<![CDATA[#{ post.to_liquid['content'] }]]>", :published_on => post.to_liquid['date'].strftime('%F%TZ'), }
      result = RestClient.post( push_url, { :article => payload } )
      p "Pushed #{post.to_liquid['title']}"
    end
  end

  desc "Generate lastfm post"
  task :lastfm do 
    require 'hpricot'
    require 'open-uri'
    require 'rss'
	
    data = "I've listened to: \r\n"
	    
    rss = RSS::Parser.parse(open('http://ws.audioscrobbler.com/2.0/user/theodorenielsen/recenttracks.rss').read)
    rss.items.each do |item|
      data += "\r\n * #{item.title}"
    end
	    
    jekyll_post = <<-EOPOST
---
title: Recently on last.fm
layout: post
type: music
summary: A small sampling of what I have scrobbled
---
#{data}
	    EOPOST
    filename = Time.now.strftime("%Y-%m-%d")
    file = File.new("./_posts/#{filename}-lastfm.markdown", "w+")
    file.write(jekyll_post)
    file.close
	
  end  
end

namespace "tags" do
  desc "Generate tag pages"
  task :generate_pages do
    folder = "tags"

    site.tags.each do |tag, posts|
      tag_page = "#{folder}/#{tag}.html"

      File.open(tag_page, 'w') do |file|
        file.write <<-EOS
---
layout: post
title: #{tag}
name: #{tag}
---

<ul class="posts">

</ul>
        EOS
      end
    end
  end
end

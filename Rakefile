# Good night, sweet prince.

task :default => [:serv]

desc "Commit and push to deploy"
task :deploy do 
  
end

desc "Rev your engines"
task :serv do 
  puts "Go-go gadget hackerblog!"
  system('jekyll --server')
end

namespace "posts" do
  desc "Generate lastfm post"
  task :lastfm do 
    require 'rubygems'
    require 'hpricot'
    require 'open-uri'
    require 'rss'
	
    data = "I've listened to: \r\n"
	    
    rss = RSS::Parser.parse(open('http://ws.audioscrobbler.com/2.0/user/theodorenielsen/recenttracks.rss').read)
    rss.items.each do |item|
      data += "\r\n * [" + item.title + '](' + item.title + ')'
    end
	    
    jekyll_post = <<-EOPOST
---
title: This week on last.fm
layout: post
type: music
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
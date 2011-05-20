# Good night, sweet prince.

task :default do 
  puts 'YEAH'
end

task :serv do 
  system('jekyll --server')
  puts "Go-go gadget hackerblog!"
end

namespace "posts" do 

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
layout: tag
title: solnic.eu / tags / #{tag}
name: #{tag}
---

<ul class="posts">

</ul>
        EOS
      end
    end
  end
end
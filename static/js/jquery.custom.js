$(function(){
  $("#tweets").tweet({
    avatar_size: 0,
    count: 1,
    username: "witty_name",
    loading_text: "Searching Twitter... <br />Please be patient",
    refresh_interval: 200,
    template: function(i){return i["text"]}
  });
  
  if ( $.cookie("alembic") == 'true' ) { $('#rss').html('<a href="/portfolio.html">code</a>'); }
  
  	
    
});
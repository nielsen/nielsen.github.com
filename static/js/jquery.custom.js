$(function(){
  $("#tweets").tweet({
    avatar_size: 0,
    count: 1,
    username: "witty_name",
    loading_text: "Searching Twitter... <br />Please be patient",
    refresh_interval: 200,
    template: function(i){return i["text"]}
  });
  
  $('#search_link').click(function(){
  	$('ul#navigation').fadeOut(function(){
  		$('form#search_form').fadeIn();
  	});
  });
  
  $('#content').masonry({
  	itemSelector: 'article'
  });
    
  /*
var paper = Raphael(document.getElementById('rss'), 25, 25);
paper.path("M4.135,16.762c3.078,0,5.972,1.205,8.146,3.391c2.179,2.187,3.377,5.101,3.377,8.202h4.745c0-9.008-7.299-16.335-16.269-16.335V16.762zM4.141,8.354c10.973,0,19.898,8.975,19.898,20.006h4.743c0-13.646-11.054-24.749-24.642-24.749V8.354zM10.701,25.045c0,1.815-1.471,3.287-3.285,3.287s-3.285-1.472-3.285-3.287c0-1.813,1.471-3.285,3.285-3.285S10.701,23.231,10.701,25.045z").attr({fill: "#000", stroke: "none"}); 
*/ 
      
});
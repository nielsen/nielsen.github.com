(function($){
  var el;
  var settings = {};

  var methods = {
    init: function(options) {
      el = this;

      settings = {
                   token: false,
                   query_param: 'q'
                 };

      if (options) {
        $.extend(settings, options);
      }

      if (!settings.token || settings.query_param == '') {
        return this;
      }

      $.getJSON('http://tapirgo.com/api/1/search.json?token=' + settings.token + '&query=' + paramValue(settings.query_param) + '&callback=?', function(data){
          		   if(settings['complete']) { settings.complete(); }
                   if ( data.length > 0 ) {
          		       el.append('<h1>' + data.length + ' Search Results</h1>');
          		       $.each(data, function(key, val) {
          		           el.append('<div class="post"><h2><a href="' + val.link + '">' + val.title + '</a></h2><p class="post_summary">' + val.summary + '</p><div class="post_meta"><div>&para; <a href="' + val.link + '">Permalink</a></div></div></div>');
          			   });
        			} else {
		            	el.append('<h1>Gosh. We don\'t have anything like that.</h1>');
        			}
      });

      return this;
    }
  };

  // Extract the param value from the URL.
  function paramValue(query_param) {
    var results = new RegExp('[\\?&]' + query_param + '=([^&#]*)').exec(window.location.href);
    return results ? results[1] : false;
  }

  $.fn.tapir = function(method) {
    if (methods[method]) {
      return methods[ method ].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || ! method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' +  method + ' does not exist on jQuery.tapir');
    }
  };

})( jQuery );
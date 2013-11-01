/* 
	By Matt Stauffer  @mattstauffer 
*/
var userConsole = (function ($, window, document) {
	var log,
		defaults,
		options,
		$log = $('<div id="userConsole" />');

	defaults = {
		delay: 5000
	};

	_init = function() {
		$('<style>#userConsole{opacity:0;position:fixed;bottom:20px;right:20px;z-index:500;background-color:#000;color:#fff;border-radius:3px;font-family:Georgia;font-size:12px;letter-spacing:1px;padding:3px 8px;transition:opacity 0.25s;-webkit-transition:opacity 0.25s;-moz-transition:opacity 0.25s;}#userConsole.show{opacity: 1;}</style>').appendTo('body');
		$log.appendTo('body');
		// @todo: Allow for extension/optimization later
		options = defaults;
	};

	log = function( message ) {
		// console.log('Logging ' + message);
		$log
			.html( message )
			.addClass('show');
		setTimeout(
			function() {
				$log.removeClass('show');
			},
			options.delay
		);
	};

	_init();

	return {
		log: log
	};
})(jQuery, window, document);
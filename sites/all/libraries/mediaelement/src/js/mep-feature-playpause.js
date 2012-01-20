(function($) {
	// PLAY/pause BUTTON
	MediaElementPlayer.prototype.buildplaypause = function(player, controls, layers, media) {
		var play = 
			$('<div class="mejs-button mejs-playpause-button mejs-play" type="button">' +
				'<button type="button"></button>' +
			'</div>')
			.appendTo(controls)
			.click(function(e) {
				e.preventDefault();
			
				if (media.paused) {
					media.play();
				} else {
					media.pause();
				}
				
				return false;
			});

		media.addEventListener('play',function() {
			play.removeClass('mejs-play').addClass('mejs-pause');
		}, false);
		media.addEventListener('playing',function() {
			play.removeClass('mejs-play').addClass('mejs-pause');
		}, false);


		media.addEventListener('pause',function() {
			play.removeClass('mejs-pause').addClass('mejs-play');
		}, false);
		media.addEventListener('paused',function() {
			play.removeClass('mejs-pause').addClass('mejs-play');
		}, false);
	}
	
})(mejs.$);
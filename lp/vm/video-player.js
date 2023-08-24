(function($){
	$(document).ready(function() {
		
        $('.video-player .video').each(function(){
            var plyr = new Plyr(this,{
                showPosterOnEnd:true,
				ratio:'16:9',
                settings:[],
                iconUrl:iconUrl,
                blankVideo:blankVideo,
				youtube:{noCookie:true}
            });
            plyr.on('ready', function(event){
                $('iframe', this).attr('tabindex', -1);
            });
        });
		
	});
})(jQuery);
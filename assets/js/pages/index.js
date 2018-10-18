$(document).ready(function() {
    $('.play-button').click(function() {
        var videoUrl = $(this).data('video');
        $(this).closest('.video').addClass('play')
        .find('iframe').attr('src', videoUrl);
    });
	
	$('.videos-carousel-wrapper .btn').click(function(){
		$('.video-wrapper iframe').attr('src', '');
		$('.video.play').removeClass('play');
	});

    $('.input-file-wrapper input[type="file"]').change(function(e) {
        var fullPath = this.value;
        if (fullPath) {
            var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
            var filename = fullPath.substring(startIndex);
            if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                filename = filename.substring(1);
            }

            console.log(filename);
            $('.input-file-wrapper input[type="text"]').val(filename);
        }
    });
});
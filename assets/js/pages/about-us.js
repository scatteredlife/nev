$(document).ready(function() {
    $('.our-team .tab-item').click(function() {
        var target = $(this).data('target');
        $(this).parent().find('.tab-item').removeClass('active');
        $(this).parent().parent().find('.tab-content').removeClass('active');
        $('.carousel-team').removeClass('active');
        $('.' + target).addClass('active');
        $(this).addClass('active');
    });

    $('.about-us-page .tab-item').click(function() {
        var target = $(this).data('target');
        $(this).parent().find('.tab-item').removeClass('active');
        $(this).parent().parent().find('.tab-content').removeClass('active');
        $('.image-wrapper.left').removeClass('active');
        $('.' + target).addClass('active');
        $(this).addClass('active');
    });

     $('.our-team .tab-item').click(function() {
        owl1.trigger('refresh.owl.carousel');
        owl2.trigger('refresh.owl.carousel');
        owl3.trigger('refresh.owl.carousel');
     });

     $('.btn.play-button').click(function() {
        var videoUrl = $(this).data('video');
        $('.video').addClass('play')
        .find('iframe').attr('src', videoUrl);

    });

    var owl1 = $('.carousel-team.tab-p1 .owl-carousel');
    owl1.owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $('.carousel-team.tab-p1 .owl-controls .owl-left').click(function() {
        owl1.trigger('prev.owl.carousel');
    });

    $('.carousel-team.tab-p1 .owl-controls .owl-right').click(function() {
        owl1.trigger('next.owl.carousel');
    });

    $('.tab-content.tab-p1 .profile-item').click(function() {
        var target = $(this).data('target');
        owl1.trigger('to.owl.carousel', [target]);
    });

    var owl2 = $('.carousel-team.tab-p2 .owl-carousel');
    owl2.owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $('.carousel-team.tab-p2 .owl-controls .owl-left').click(function() {
        owl2.trigger('prev.owl.carousel');
    });

    $('.carousel-team.tab-p2 .owl-controls .owl-right').click(function() {
       
		owl2.trigger('next.owl.carousel');
    });

    $('.tab-content.tab-p2 .profile-item').click(function() {
        var target = $(this).data('target');
        owl2.trigger('to.owl.carousel', [target]);
    });

    var owl3 = $('.carousel-team.tab-p3 .owl-carousel');
    owl3.owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $('.carousel-team.tab-p3 .owl-controls .owl-left').click(function() {
        owl3.trigger('prev.owl.carousel');
    });

    $('.carousel-team.tab-p3 .owl-controls .owl-right').click(function() {
        owl3.trigger('next.owl.carousel');
    });

    $('.tab-content.tab-p3 .profile-item').click(function() {
        var target = $(this).data('target');
        owl3.trigger('to.owl.carousel', [target]);
    });
});
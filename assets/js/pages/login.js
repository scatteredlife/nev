$(document).ready( function(){
	$('.balloon-left .btn').click(function(){
		$('.popup').removeClass('hide').addClass('show');
		$('.popup-left').removeClass('hide').addClass('show');
	});
	
	$('.balloon-right .btn').click(function(){
		$('.popup').removeClass('hide').addClass('show');
		$('.popup-right').removeClass('hide').addClass('show');
	});
	
	$('.popup .btn.btn-close').click(function(){
		$('.popup').removeClass('show').addClass('hide');
		$('.popup-right').removeClass('show').addClass('hide');
		$('.popup-left').removeClass('show').addClass('hide');
	});
});
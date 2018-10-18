$(function(){
	$('.portfolio-grid').isotope({
	  itemSelector: '.portfolio-item',
	  layoutMode: 'fitRows'
	});
	
	$('.portfolio-filter a').click(function() {
	  var current = $(this);
	  
	  current.siblings('a').removeClass('active');
	  current.addClass('active');
	  
	  var filterval = current.attr('data-filter');
	  var filtertarget = current.attr('data-target');
	  
	  var activeItems = $(filtertarget + ' ' + filterval);
	  
	  if(activeItems.length < 9){
		  activeItems.addClass('active');  
	  } else {
		  $(filtertarget + ' .active').removeClass('active');
	  }
	  
	  $(filtertarget).isotope({ filter: filterval });
	});


	$('.portfolio-item').click(function() {
		var content = $(this).find('.popup-content').html();
		$('.popup-block.custom').find('.popup-content').html(content);
		$('.popup-block.custom').removeClass('hide');
		$('.popup-block.custom').addClass('show');
	});
	
	$(document).on('click', '.close', function() {
		$('.popup-block.custom').removeClass('show');
		$('.popup-block.custom').addClass('hide');
	});
});
$(document).ready(function(){

      $('#home').addClass("hover");
      $('#home > p').addClass("hover");
   

	$(window).scroll(function(){
		
		if ($(window).scrollTop() > 30)
		{
			$('.fabAnimation').css({
				'margin-top'			: '0vh'
			});

			$('.container').css({
				'background-color'			: '#F5F5F6'
			});

			$('.container-center').css({
				'background-color'			: '#F5F5F6'
			});
		}
		else
		{
			$('.fabAnimation').css({
				'margin-top'			: '20vh'
			});

			$('.container').css({
				'background-color'			: '#FFFFFF'
			});

			$('.container-center').css({
				'background-color'			: '#FFFFFF'
			});
		}
	});
});

function removeHover(){
	$('.mobileBottomBarItem').removeClass("hover");
	$('.mobileBottomBarItem > p').removeClass("hover");
}

function addHover(id){
	$('#' + id).addClass("hover");
	$('#' + id + ' > p').addClass("hover");
}

function move(number){
	$('.container-center-big').css({'margin-left' : '-' + number +'%'});
}
$(document).ready(function(){

      $('#home').addClass("hover");
      $('#home > p').addClass("hover");

      $('#fab').hover(function(){
      	$('#linkedin').addClass("moveLinkedin");
      });

	$(window).scroll(function(){
		
		if ($(window).scrollTop() > 30)
		{
			$('.fabAnimation').css({
				'margin-top'			: '-230%'
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
				'margin-top'			: '200%'
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
	$(window).scrollTop(0);
}

function switchIcon(){
	setTimeout(function(){document.getElementById("fabIcon").innerHTML = "mail";}, 200);
}

function switchBack(){
	setTimeout(function(){document.getElementById("fabIcon").innerHTML = "add";}, 200);
}

function moveFABs(){
	$('#linkedin').addClass("move");
}

function moveFABsBack(){
	$('#linkedin').removeClass("move");
}


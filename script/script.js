$(document).ready(function(){
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
$(document).ready(function(){
	$(window).scroll(function(){
		
		if ($(window).scrollTop() > 30)
		{
			$('.fabAnimation').css({
				'margin-top'			: '0vh'
			});
		}
		else
		{
			$('.fabAnimation').css({
				'margin-top'			: '20vh'
			});
		}
	});
});
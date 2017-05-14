function expand(element) {
	$('.card').removeClass('expand');
    $(element).addClass('expand');
}

window.onclick = function (event) {
    if (!event.target.matches('.card') && !event.target.matches('button')) {
    	$('.card').removeClass('expand');
    }
}
$(document).ready(function(){
	// Для правильного отображения отзывов клиентов
	if($(window).width() >= 992) {
		$(".bqreverse").addClass('blockquote-reverse');
	} else {
		$(".bqreverse").removeClass('blockquote-reverse');
	}
	$(window).resize(function() {
		if($(window).width() >= 992) {
			$(".bqreverse").addClass('blockquote-reverse');
		} else {
			$(".bqreverse").removeClass('blockquote-reverse');
		}
	});
});
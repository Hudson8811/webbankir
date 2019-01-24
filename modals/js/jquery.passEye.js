$(function(){
	//PassEye by SaD(im-sad@ya.ru)

	$(".passEye").append('<span class="eye" title="Показать/скрыть пароль"></span>');

	$(".passEye .eye").click(function() {
		$(this).toggleClass('openEye');
		var passVal = $(this).prev().attr('type');
		if ( passVal === 'text' ) { $(this).prev().attr('type', 'password');  }
			else { $(this).prev().attr('type', 'text'); }
	});

});
$(function(){



	// sp hamburger menu
	$('.sp_header__head').find('p').click(function(){
		if($(this).hasClass('menu-on')){
			$('.sp_header__body').css('display', 'none');
			$(this).removeClass('menu-on');
		}
		else{
			$('.sp_header__body').css('display', 'block');
			$(this).addClass('menu-on');
		}
	})

});
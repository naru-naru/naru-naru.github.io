$(function(){
	// loading design
	var h = $(window).height();
	$('#page').css('display','none');
	$('#loader-bg ,#loader').height(h).css('display','block');
	$('#loader-bg').fadeOut(1500);
	$('#page').css('display', 'block');


	// sp hamburger menu
	$('.sp_header__head').find('p').click(function(){
		if($(this).hasClass('menu-on')){
			$('.sp_header__body').fadeOut("slow");
			$(this).removeClass('menu-on');
			$('.sp_header__body').removeClass('menu-on');
			$(this).find('span').addClass('bar-off').removeClass('bar-on');
		}
		else{
			$('.sp_header__body').fadeIn("slow");
			$(this).addClass('menu-on');
			$('.sp_header__body').addClass('menu-on');
			$(this).find('span').addClass('bar-on').removeClass('bar-off');
		}
	})

	$('.sp_header__body').click(function(){
		if($(this).hasClass('menu-on')){
			$('.sp_header__body').fadeOut("slow");
			$('.sp_header__head').removeClass('menu-on');
			$('.sp_header__body').removeClass('menu-on');
			$('.sp_header__head').find('span').addClass('bar-off').removeClass('bar-on');
		}
		else{
			$('.sp_header__body').fadeIn("slow");
			$('.sp_header__head').addClass('menu-on');
			$('.sp_header__body').addClass('menu-on');
			$('.sp_header__head').find('span').addClass('bar-on').removeClass('bar-off');
		}
	})

	$('.iconLink').find('a').hover(
        function(){
            $(this).addClass('hover-on');
            $(this).removeClass('hover-off');
        },
        function(){
            $(this).removeClass('hover-on');
            $(this).addClass('hover-off');
        }
    )




});

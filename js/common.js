$(document).ready(function() {

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	// $(".iframe").fancybox({
	// 	maxWidth	: 800,
	// 	maxHeight	: 600,
	// 	fitToView	: false,
	// 	width		: '70%',
	// 	height		: '70%',
	// 	autoSize	: false,
	// 	closeClick	: false,
	// 	openEffect	: 'none',
	// 	closeEffect	: 'none'
	// });


	$(".fancybox-thumb").fancybox({
		prevEffect	: 'none',
		nextEffect	: 'none',
		helpers	: {
			title	: {
				type: 'outside'
			},
			thumbs	: {
				width	: 50,
				height	: 50
			}
		}
	});

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo

	$("#menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});


	$("#menu2").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

	$("#menu3").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);

	});




	//Каруселька
	//Документация: 
	// var owl = $(".carousel");
	// owl.owlCarousel({
	// 	items : 4
	// });
	// owl.on("mousewheel", ".owl-wrapper", function (e) {
	// 	if (e.deltaY > 0) {
	// 		owl.trigger("owl.prev");
	// 	} else {
	// 		owl.trigger("owl.next");
	// 	}
	// 	e.preventDefault();
	// });
	// $(".next_button").click(function(){
	// 	owl.trigger("owl.next");
	// });
	// $(".prev_button").click(function(){
	// 	owl.trigger("owl.prev");
	// });

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

	$("#form2").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#form2").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

// форма обратной связи всплывающая 
	// $("#form").submit(function() {
	// 	$.ajax({
	// 		type: "GET",
	// 		url: "mail.php",
	// 		data: $("#form").serialize()
	// 	}).done(function() {
	// 		alert("Спасибо за заявку!");
	// 		setTimeout(function() {
	// 			$.magnificPopup.close();
	// 		}, 1000);
	// 	});
	// 	return false;
	// }); 

$(document).ready(function(){
	$(".bootstrap-carousel").swipe( {
		swipeLeft: function() {
			$(this).carousel("next");
		},
		swipeRight: function() {
			$(this).carousel("prev");
		},
		allowPageScroll: "vertical"
	});
});

	$(".owl-carousel").owlCarousel({
		loop:true,
		items: 3,
		//margin:130,
		//autoplay:true,
	    autoplayTimeout:6000,
	    autoplayHoverPause:true,
		//stagePadding: 30,
		dots: false,
		nav: true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		navContainer: '#customNav',
		responsive: {
	    // > 0
	    0 : {
	    	items: 1,
	      dots: false,
	      margin:5,
	      stagePadding: 5,
	       dots: true,
        nav: false,
	    },
	    // > 768
	    768 : {
	    	items: 3,
	    	margin:5,
	    	stagePadding: 5,
        dots: true,
        nav: false,
	    }
		}
	});

							$(".owl-carousel2").owlCarousel({
	loop:true,
		items: 1,
		//margin:130,
		//autoplay:true,
	    autoplayTimeout:6000,
	    autoplayHoverPause:true,
		//stagePadding: 30,
		dots: false,
		nav: true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		navContainer: '#customNav',
		responsive: {
	    // > 0
	    0 : {
	    	items: 1,
	      
	      margin:5,
	      stagePadding: 5,
	     
        nav: false,
	    },

	    // > 768
	    768 : {
	    	items: 1,
	    	margin:5,
	    	stagePadding: 5,
        dots: true,
        nav: false,
	    }
		}
	});
							
$(".owl-carousel3").owlCarousel({
	loop:true,
		items: 1,
		//margin:130,
		//autoplay:true,
	    autoplayTimeout:6000,
	    autoplayHoverPause:true,
		//stagePadding: 30,
		dots: false,
		nav: true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		navContainer: '#customNav',
		responsive: {
	    // > 0
	    0 : {
	    	items: 1,
	      
	      margin:5,
	      stagePadding: 5,
	     
        nav: false,
	    },

	    // > 768
	    768 : {
	    	items: 1,
	    	margin:5,
	    	stagePadding: 5,
        dots: true,
        nav: false,
	    }
		}
	});



$("#slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout:4000,
	    autoplayHoverPause:true,
        animateOut: 'fadeOut',
        dots: true,
        nav: false,

    });



	$(".popap").magnificPopup();		

	   jQuery(function($){
   $("#phone").mask("+7 (999) 999-99-99");
   });

	   	   jQuery(function($){
   $("#phone2").mask("+7 (999) 999-99-99");
   });

	   // Прелоадер
		$(window).on('load', function () {
			var $preloader = $('#page-preloader'),
			$spinner   = $preloader.find('.spinner');
			$spinner.fadeOut();
			$preloader.delay(350).fadeOut('slow');
		});
		// Прелоадер

$(function() {     
  //при нажатии на ссылку, содержащую Thumbnail
  $('a.thumbnail').click(function(e) {
    //отменить стандартное действие браузера
    e.preventDefault();
    //присвоить атрибуту scr элемента img модального окна
    //значение атрибута scr изображения, которое обёрнуто
    //вокруг элемента a, на который нажал пользователь
    $('#image-modal .modal-body img').attr('src', $(this).find('img').attr('src'));
    //открыть модальное окно
    $("#image-modal").modal('show');
  });
  //при нажатию на изображение внутри модального окна 
  //закрыть его (модальное окно)
  $('#image-modal .modal-body img').on('click', function() {
    $("#image-modal").modal('hide')
  });
});



}); 
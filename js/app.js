/* =============== WEBP start =============== */

function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support === true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});

/* =============== WEBP end =============== */

/* =============== NAVIGATION start =============== */

jQuery(window).scroll(function(){
	var $sections = $('.cd-section');
	$sections.each(function(i,el){
		var top  = $(el).offset().top-200;
		var bottom = top +$(el).height();
		var scroll = $(window).scrollTop();
		var id = $(el).attr('id');
			if( scroll > top && scroll < bottom){
			$('a.is-selected').removeClass('is-selected');
			$('a[href="#'+id+'"]').addClass('is-selected');
		}
	})
});

/* =============== NAVIGATION end =============== */

/* =============== SCROLL start =============== */

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};

/* =============== SCROLL end =============== */


/* =============== SLIDER start =============== */

$(document).ready(function(){
	$('.reviews__slider').slick({
		slidesToShow: 2,
		infinite: true,
		responsive: [
			{
				breakpoint: 1279.98,
				settings: {
					slidesToShow: 1,
			  	}
			},
		]
	});
});
 
$(document).ready(function(){
	$('.certificates__slider').slick({
		centerMode: true,
		slidesToShow: 3,
		initialSlide: 1,
		infinite: true,
		variableWidth: true,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 991.98,
				settings: {
					dots: true,
			  	}
			},
			{
				breakpoint: 767.98,
				settings: {
					slidesToShow: 1,
					centerMode: false,
					dots: true,
			  	}
			},
		]
	});
});

var catalogSlider = null;
var mediaQuerySize = 479;

function catalogSliderInit () {
  if (!catalogSlider) {
    catalogSlider = new Swiper('.team__slider', {
   	loop: true,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		autoHeight: true,
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
   });
  }
}

function catalogSliderDestroy () {
  if (catalogSlider) {
    catalogSlider.destroy();
    catalogSlider = null;
  }
}

$(window).on('load resize', function () {
  // Берём текущую ширину экрана
  var windowWidth = $(this).innerWidth();
  
  // Если ширина экрана меньше или равна mediaQuerySize(479)
  if (windowWidth <= mediaQuerySize) {
    // Инициализировать слайдер если он ещё не был инициализирован
    catalogSliderInit()
  } else {
    // Уничтожить слайдер если он был инициализирован
    catalogSliderDestroy()
  }
});

/* =============== SLIDER end =============== */

/* =============== SPOLLERS start =============== */

$(document).ready(function () {
	$(".advantages__item-title").click(function (event) {
		event.stopPropagation();
		if ($(".advantages__info").hasClass("_one")) {
			$(".advantages__item-title").not($(this)).removeClass("active title-active");
			$(".advantages__item").not($(this)).removeClass("item-active");
			$(".advantages__item-descr").not($(this).next()).slideUp(300);
		}
		$(this).parent(".advantages__item").toggleClass("item-active");
		$(this).toggleClass("title-active");
		$(this).toggleClass("active").next().slideToggle(300);
	});
});

$(document).ready(function () {
	$(".answers__item-title").click(function (event) {
		if ($(".answers__wrapper").hasClass("_one")) {
			$(".answers__item-title").not($(this)).removeClass("active");
			$(".answers__item-descr").not($(this).next()).slideUp(300);
		}
		$(this).toggleClass("active").next().slideToggle(300);
	});
});

/* =============== SPOLLERS end =============== */

/* =============== VIDEO stages hover start =============== */

$(document).ready(function(){
	$(".stages-video").on("mouseover", function () {
		this.play();
	});
	$(".stages-video").on("mouseleave",  function(){
		this.pause();
	})	
})

/* =============== VIDEO stages hover end =============== */

/* =============== FORM mask start =============== */

$('.from-phone').inputmask({ "mask": "+7 (999) 999-9999" });


/* =============== FORM mask end =============== */

/* =============== HAMBURGER start =============== */

$('.hamburger').on('click', function () {
	$('.nav-mobile').toggleClass('nav-mobile_active');
	$('.overlay-nav').fadeIn('400')
});
$('.nav-mobile__btn-close, .nav-mobile__link').on('click', function () {
	$('.nav-mobile').toggleClass('nav-mobile_active');
	$('.overlay-nav').fadeOut('400');
});
/* =============== HAMBURGER end =============== */

/* =============== DYNAMIC ADAPT start =============== */

// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),when(breakpoint),position(digi)"
// e.x. data-da=".item,992,2"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";

var move_array = [];
var move_objects = document.querySelectorAll("[data-move]");

if (move_objects.length > 0) {
	for (var _index10 = 0; _index10 < move_objects.length; _index10++) {
		var _el6 = move_objects[_index10];

		var data_move = _el6.getAttribute("data-move");

		if (data_move != "" || data_move != null) {
			_el6.setAttribute("data-move-index", _index10);

			move_array[_index10] = {
				parent: _el6.parentNode,
				index: index_in_parent(_el6)
			};
		}
	}
}

function dynamic_adapt() {
	var w = document.querySelector("body").offsetWidth;

	if (move_objects.length > 0) {
		for (var _index11 = 0; _index11 < move_objects.length; _index11++) {
			var _el7 = move_objects[_index11];

			var _data_move = _el7.getAttribute("data-move");

			if (_data_move != "" || _data_move != null) {
				var data_array = _data_move.split(",");

				var data_parent = document.querySelector("." + data_array[0]);
				var data_index = data_array[1];
				var data_bp = data_array[2];

				if (w < data_bp) {
					if (!_el7.classList.contains("js-move_done_" + data_bp)) {
						if (data_index > 0) {
							//insertAfter
							var actual_index = index_of_elements(data_parent)[data_index];
							data_parent.insertBefore(_el7, data_parent.childNodes[actual_index]);
						} else {
							data_parent.insertBefore(_el7, data_parent.firstChild);
						}

						_el7.classList.add("js-move_done_" + data_bp);
					}
				} else {
					if (_el7.classList.contains("js-move_done_" + data_bp)) {
						dynamic_adaptive_back(_el7);

						_el7.classList.remove("js-move_done_" + data_bp);
					}
				}
			}
		}
	}

	custom_adapt(w);
}

function dynamic_adaptive_back(el) {
	var index_original = el.getAttribute("data-move-index");
	var move_place = move_array[index_original];
	var parent_place = move_place["parent"];
	var index_place = move_place["index"];

	if (index_place > 0) {
		//insertAfter
		var actual_index = index_of_elements(parent_place)[index_place];
		parent_place.insertBefore(el, parent_place.childNodes[actual_index]);
	} else {
		parent_place.insertBefore(el, parent_place.firstChild);
	}
}

function index_in_parent(node) {
	var children = node.parentNode.childNodes;
	var num = 0;

	for (var _i2 = 0; _i2 < children.length; _i2++) {
		if (children[_i2] == node) return num;
		if (children[_i2].nodeType == 1) num++;
	}

	return -1;
}

function index_of_elements(parent) {
	var children = [];

	for (var _i3 = 0; _i3 < parent.childNodes.length; _i3++) {
		if (parent.childNodes[_i3].nodeType == 1 && parent.childNodes[_i3].getAttribute("data-move") == null) {
			children.push(_i3);
		}
	}

	return children;
}

window.addEventListener("resize", function (event) {
	dynamic_adapt();
});
dynamic_adapt();

function custom_adapt(w) { }

/* =============== DYNAMIC ADAPT end =============== */

/* =============== MODAL start =============== */
$('[data-modal=call]').on('click', function () {
	$('.overlay-modal, #modal-call').fadeIn('slow')
});
$('[data-modal=price]').on('click', function () {
	$('.overlay-modal, #modal-price').fadeIn('slow')
});
$('[data-modal=request]').on('click', function () {
	$('.overlay-modal, #modal-request').fadeIn('slow')
});
$('[data-modal=modal-map-open]').on('click', function () {
	$('.overlay-modal, #modal-map-ya').fadeIn('slow')
});
$('.modal__btn-close, .modal-map__btn-close').on('click', function () {
	$('.overlay-modal, #modal-price, #modal-call, #modal-request, #modal-map-ya').fadeOut('slow');
});
/* =============== MODAL end =============== */
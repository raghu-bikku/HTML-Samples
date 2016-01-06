(function ($, window, document, undefined) {

	$(function(){

		if( $('.multiple-items').length > 0 ){
			$('.candidates').slick({
			    slide: 'article',
			    infinite: true,
			    speed: 300,
			    slidesToShow: 5,
			    slidesToScroll: 5,
			    responsive: [{
		            breakpoint: 786,//off by 14 pixel
		            settings: {
		                slide: 'article',
		                autoplay: false,
						dots: true,
				        infinite: true,
				        slidesToShow: 3,
				        slidesToScroll: 3,
		            }
		        },{
		            breakpoint: 554,//off by 14 pixel
		            settings: {
		                slide: 'article',
		                autoplay: false,
						dots: true,
				        infinite: true,
				        slidesToShow: 2,
				        slidesToScroll: 2,
		            }
		        },{
		            breakpoint: 466,//off by 14 pixel
		            settings: {
		            	slide: 'article',
		                autoplay: false,
						dots: false,
				        infinite: true,
				        speed: 300,
				        arrows: false,
				        centerMode: true,
		                centerPadding: '20px',
		                slidesToShow: 1
		            }
		        }]
			});
			$('.education').slick({
			    slide: 'article',
			    infinite: true,
			    speed: 300,
			    slidesToShow: 4,
			    slidesToScroll: 4,
			    responsive: [{
		            breakpoint: 786,//off by 14 pixel
		            settings: {
		                slide: 'article',
		                autoplay: false,
						dots: true,
				        infinite: true,
				        slidesToShow: 3,
				        slidesToScroll: 3,
		            }
		        },{
		            breakpoint: 554,//off by 14 pixel
		            settings: {
		                slide: 'article',
		                autoplay: false,
						dots: true,
				        infinite: true,
				        slidesToShow: 2,
				        slidesToScroll: 2,
		            }
		        },{
		            breakpoint: 466,//off by 14 pixel
		            settings: {
		            	slide: 'article',
		                autoplay: false,
						dots: false,
				        infinite: true,
				        speed: 300,
				        arrows: false,
				        centerMode: true,
		                centerPadding: '20px',
		                slidesToShow: 1
		            }
		        }]
			});

		}
		if ($('.media-gallery').length > 0) {

			$('.slider-nav').slick({
				slide: 'li',
			    infinite: true,
			    speed: 300,
			    slidesToShow: 6,
			    slidesToScroll: 6,
			    responsive: [{
		            breakpoint: 786,//off by 14 pixel
		            settings: {
		                slide: 'li',
		                autoplay: false,
						dots: true,
				        infinite: true,
				        slidesToShow: 5,
				        slidesToScroll: 5,
		            }
		        },{
		            breakpoint: 554,//off by 14 pixel
		            settings: {
		                slide: 'li',
		                autoplay: false,
						dots: true,
				        infinite: true,
				        slidesToShow: 3,
				        slidesToScroll: 3,
		            }
		        },{
		            breakpoint: 466,//off by 14 pixel
		            settings: {
		                slide: 'li',
		                autoplay: false,
						dots: true,
				        infinite: true,
				        slidesToShow: 2,
				        slidesToScroll: 2,
		            }
		        }]
			});
		}

		$(document).on('click','.navbar-toggle',function(e) {
	        e.preventDefault();
	        var windowHeight = $(window).height();
	        $('.collapse').animate({right: 0},300).show();
	        $('header').prepend('<div class="overlay"></div>');
	    });
		$('.nav-close').click(function(e){
			e.preventDefault();
			$('.collapse').animate({right: -220},300);
			$('.overlay').remove();
		});


		//start of infinite scroll 

		//assign of waypoint
		var infinite = new Waypoint.Infinite({
	        element: $('.infinite-container')[0],
	        offset: 'bottom-in-view'
	    });

	    
		//parameters needed
	    var urls = [];
	    var scrollPosition = [];
	    var url = window.location.href;
	    var urlsLength = urls.length;

	    urls.push(url);
	  	
	    scrollPosition.push($('footer').offset().top);
	    	
		handleGetWayPoints();	    

		//get inserted element, url, position, length
	    function handleGetWayPoints () {
	        $(document).bind('DOMNodeInserted', function(e) {
	           
	            var elementClass = $(e.target).attr('class');

	            if(elementClass == 'infinite-item') {
	                var offset = $('footer').offset().top;
	                var elementUrl = $(e.target)["context"]["attributes"][1]["nodeValue"];
	                
	                urls.push(elementUrl);
	                scrollPosition.push(offset);
	                urlsLength = urls.length;
	                
	            }
	        });

	        handleChangeUrl();
	    }

	    //change url using browser history
	    function handleChangeUrl () {

	    	$(window).scroll(function() {
	    		if (urlsLength >= 2) {
	    			// console.log(scrollPosition);
	    			scrollPositionY = $(window).scrollTop();
		            for(var i=0; i<urlsLength; i++) {
		                if (scrollPositionY <= scrollPosition[i]) {
		                    // if(window.location.href != urls[i])
		                    	History.pushState(null,"TITLE HERE",urls[i]);
		                    break;
		                }
		            }
	        	}
	    	})

	    }

	    //end of infinite scroll
	});
})(jQuery, window, document);
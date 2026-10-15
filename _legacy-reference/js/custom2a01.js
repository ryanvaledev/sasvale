jQuery(document).ready(function($) {


// Remove active class from all TOC items
	$('.table_of_content .elementor-toc__list-item-text').removeClass('elementor-item-active');
	$('.table_of_content .elementor-toc__list-item-text').first().addClass('elementor-item-active');
	
// Initialize custom cursor
var cursor = new kursor({
	type: 1,
	color: "#7684FF" 
});
	
// Selector group for elements that should have the black cursor
const blackCursorTargets = '.shorts_btn,.menu-inner-flex, .dark-button,.white_bg a, .main-light-button, .main_header ul.elementor-nav-menu>li>a, .main_header .drk-hvr, .inner-faqs, .purp_highlighted, button:not(.share-btn)';
	
// Selector group for elements that should REMOVE black cursor (light/white mode areas)
const lightCursorTargets = ' body button.share-btn, .inners_method, .blogs_infos span.elementor-post-info__terms-list > a';

// Handle mouseenter/leave for black cursor
$(blackCursorTargets).on('mouseenter', function () {
	$('div[class*=kursor].kursor--1').addClass('kursor-black');
}).on('mouseleave', function () {
	$('div[class*=kursor].kursor--1').removeClass('kursor-black');
});

// Handle mouseenter/leave for light/white cursor
$(lightCursorTargets).on('mouseenter', function () {
	$('div[class*=kursor].kursor--1').removeClass('kursor-black');
}).on('mouseleave', function () {
	$('div[class*=kursor].kursor--1').addClass('kursor-black');
});

// Enhanced: Real-time detection on mousemove only (not scroll)
$(window).on('mousemove', function (e) {
	const $cursor = $('div[class*=kursor].kursor--1');

	// Check if coordinates are valid
	if (e.clientX != null && e.clientY != null) {
		const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);

		if (
			$(hoveredElement).is(blackCursorTargets) ||
			$(hoveredElement).closest(blackCursorTargets).length
		) {
			$cursor.addClass('kursor-black');
		} else if (
			$(hoveredElement).is(lightCursorTargets) ||
			$(hoveredElement).closest(lightCursorTargets).length
		) {
			$cursor.removeClass('kursor-black');
		} else {
			$cursor.removeClass('kursor-black'); // Default: remove if none match
		}
	}
});

		

 var shareBtn = $('.share-btn');
            var shareButtons = $('.social-share-buttons');
            var copyBtn = $('.copy-btn');
            var postContent = $('#post-cntnt').find('.elementor-shortcode').html();

            shareBtn.on('click', function() {
                shareButtons.toggle();
            });

var $myBtn = $("#myBtn");

    // Scroll event
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 20) {
        $myBtn.css("display", "flex");
      } else {
        $myBtn.css("display", "none");
      }
    });

    // Click event to scroll to top
    $myBtn.on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, "slow");
    });

    // Custom Cursor Implementation
        const customCursor = document.querySelector('.crsr'); // Select the custom cursor
        const sections = document.querySelectorAll('.crsrs'); // Select all sections with the class 'crsrs'

    // Check if the custom cursor and sections exist
        if (customCursor  && sections.length > 0) {
            sections.forEach((section) => {
                section.addEventListener('mousemove', (e) => {
                    // Follow mouse for both cursors
                    customCursor.style.left = `${e.pageX}px`; 
                    customCursor.style.top = `${e.pageY}px`; 
                 
                });

                section.addEventListener('mouseenter', () => {
                    // Show both cursors when entering a section
                    customCursor.style.display = 'flex'; 
//                     customCursorTop.style.display = 'flex'; 
                });

                section.addEventListener('mouseleave', () => {
                    // Hide both cursors when leaving a section
                    customCursor.style.display = 'none'; 
               
                });
            });
        } else {
            console.error('Custom cursor or sections not found.');
        }



    // scrolling 
        var lastScrollTop = 0; // Store the last scroll position

        $(window).on('scroll', function() {
            var scrollPosition = $(this).scrollTop(); // Get the current scroll position

            if (scrollPosition >= 350 && scrollPosition > lastScrollTop) {
                // Add 'active' class when scrolling down and the scroll position is >= 150px
                $('.main_header').addClass('active');
            } else if (scrollPosition < 350 || scrollPosition < lastScrollTop) {
                // Remove 'active' class when scrolling up or scroll position is < 150px
                $('.main_header').removeClass('active');
            }

            lastScrollTop = scrollPosition; // Update last scroll position
        });


    // scrolling
        var previousScrollPosition = 0; // Store the previous scroll position
        var scrollThreshold = 100; // Threshold scroll position

        $(window).on('scroll', function() {
            var currentScrollPosition = $(this).scrollTop(); // Get the current scroll position

            if (currentScrollPosition >= scrollThreshold && currentScrollPosition > previousScrollPosition) {
                // Add 'active' class when scrolling down and the scroll position is >= scrollThreshold
                $('.main_header').addClass('actives');
            } else if (currentScrollPosition < scrollThreshold || currentScrollPosition < previousScrollPosition) {
                // Remove 'active' class when scrolling up or scroll position is < scrollThreshold
                $('.main_header').removeClass('actives');
            }

            previousScrollPosition = currentScrollPosition; // Update previous scroll position
        });

    // end 


    // When the toggle icon is clicked inside .inner-faqs
        $(".inner-faqs .faqs-header").on('click', function() {

            // Get the closest parent .inner-faqs to target the FAQ content and icon
            var $faqItem = $(this).closest('.inner-faqs');

            // If the clicked FAQ is not already active, close all others and open the clicked one
            if (!$faqItem.hasClass('active')) {
                // Close all other FAQ items and remove the 'active' class
                $(".inner-faqs").removeClass('active');
                $(".inner-faqs .Faqs-body").slideUp(600); // Close all FAQ bodies smoothly
                $(".inner-faqs .toggle-faqs-icon").removeClass('active'); // Remove 'active' class from all icons
            }

            // Toggle the icon and .inner-faqs active state of the clicked FAQ
            $faqItem.find('.toggle-faqs-icon').toggleClass('active');
            $faqItem.toggleClass('active');

            // Smooth transition for showing/hiding the current FAQ body
            $faqItem.find('.Faqs-body').stop(true, true).slideToggle(600); // 300ms for smooth toggle
        });



    $('.main_services_related_post').slick({
        infinite: true,
        slidesToShow: 3, // Show 2 slides on desktop
        slidesToScroll: 1,
        arrows: false,
        dots: false, // Initially hide dots on desktop
        responsive: [
            {
                breakpoint: 1025, // On mobile
                settings: {
                    slidesToShow:2, // Show 1 slide on mobile
                    dots: false, // Show dots on mobile
                    arrows: false
                }
            },
			{
                breakpoint: 786, // On mobile
                settings: {
                    slidesToShow: 1, // Show 1 slide on mobile
                    dots: true, // Show dots on mobile
                    arrows: false
                }
            }
        ]
    });


// main services related services carousel 


    var $sliders = $('.highlighted_services_carousel');
    var $progressBar = $('.highlighted_progress');
    var $progressBarLabel = $( '.slider__label' );
    
        $sliders.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
            var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
            
            $progressBar
            .css('background-size', calc + '% 100%')
            .attr('aria-valuenow', calc );
            
            $progressBarLabel.text( calc + '% completed' );
        });


$('.highlighted_services_carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    touchThreshold: 10,
    swipeToSlide: true,
//     waitForAnimate: false,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    dots: false,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true
            }
        },
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000
            }
        }
    ]
});

        $('.inner_services_highlighted_services_carousel').slick({
            infinite: true,
            slidesToShow: 4, // Show 2 slides on desktop
            slidesToScroll: 1,
            arrows: false,
			touchThreshold: 10,    
            draggable: true, 
            autoplay: true,       
			swipeToSlide: true,
//   			waitForAnimate: false,       
            autoplaySpeed: 2000,         
            speed: 1000,                  
            dots: false, 
            responsive: [
                {
                    breakpoint: 1400,    // Tablet size: Adjust number of items shown at 1024px width
                    settings: {
                        slidesToShow: 3,    // Show 4 slides on tablet
                        slidesToScroll: 1,
                        autoplay: true,     // Autoplay on tablet as well
                    }
                },
                {
                    breakpoint: 1025,    // Tablet size: Adjust number of items shown at 1024px width
                    settings: {
                        slidesToShow: 2,    // Show 4 slides on tablet
                        slidesToScroll: 1,
                        autoplay: true,     // Autoplay on tablet as well
                        autoplaySpeed: 2000,
                    }
                },
                {
                    breakpoint: 768,     // Mobile size: Adjust number of items shown at 768px width
                    settings: {
                        dots: true,
                        slidesToShow: 1,    // Show 2 slides on mobile
                        slidesToScroll: 1,
                        autoplay: true,     // Autoplay on mobile
                        autoplaySpeed: 2000,
                    }
                }
            ]
        });



// end 

      $('.our-gmb-review').slick({
    infinite: false,              // Infinite scrolling off by default
    slidesToShow: 4,     
    touchThreshold: 10,    
    draggable: true, 
    slidesToScroll: 1,           
    autoplay: false,              
    autoplaySpeed: 2000,         
    speed: 1000,   
    rtl: false,
    arrows: false,               
    dots: false,                 
    responsive: [
        {
            breakpoint: 1025,    
            settings: {
                infinite: true,   // Only keep one infinite setting here
                slidesToShow: 2,   
                slidesToScroll: 1,
                autoplay: true,     
                dots: true, 
                autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 768,     
            settings: {
                infinite: true,    // Also control infinite false on mobile
                slidesToShow: 1,    
                slidesToScroll: 1,
                dots: true,
                autoplay: true,     
                autoplaySpeed: 2000,
            }
        }
    ]
});

        $('.service-slick-slider').slick({
            slidesToShow: 3, 
        infinite: true,   
 touchThreshold: 10,    
            draggable: true, 
            slidesToScroll: 1,      
            autoplay: true,    
			rtl: false,
			 swipeToSlide: true,
//    			 waitForAnimate: false,
            autoplaySpeed: 2000,       
            speed: 1500,                 
            arrows: false,     
            dots: false,                 
            responsive: [
                {
                    breakpoint: 1440,  // When screen width is 1440px or below
                    settings: {
                        slidesToShow: 3,   // Show 6 slides at a time
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1025,  // When screen width is 1024px or below (typically tablets)
                    settings: {
                        slidesToShow: 2,   // Show 4 slides at a time
                        slidesToScroll: 1,
						dots: true
                    }
                },
                {
                    breakpoint: 768,   // When screen width is 768px or below (typically mobile)
                    settings: {
                        slidesToShow: 1,   // Show 1 slide at a time
                        slidesToScroll: 1,
						dots: true
                    }
                }
            ]
        });


        $('.highlted-top').slick({
            infinite: false,      
touchThreshold: 10,    
			rtl: false,
            draggable: true, // Default: Show 8 slides at a time        // Infinite scrolling
            slidesToShow: 5,             // Show 5 slides at once by default (desktop)
            slidesToScroll: 1,           // Scroll 1 slide at a time
            autoplay: false,              // Enable autoplay
            autoplaySpeed: 2000,         // Autoplay speed (in milliseconds, 2000ms = 2 seconds)
            speed: 1500,                  // Transition speed between slides (in milliseconds)
            arrows: false,               // Disable navigation arrows
            dots: false,                 // Disable pagination dots
            responsive: [
                {
                    breakpoint: 1025,    // Tablet size: Adjust number of items shown at 1024px width
                    settings: {
                        slidesToShow: 3,    // Show 4 slides on tablet
                        slidesToScroll: 1,
                        autoplay: true,     // Autoplay on tablet as well
                        autoplaySpeed: 2000,
                    }
                },
                {
                    breakpoint: 768,     // Mobile size: Adjust number of items shown at 768px width
                    settings: {
                        slidesToShow: 1,    // Show 2 slides on mobile
                        slidesToScroll: 1,
                        autoplay: true,     // Autoplay on mobile
                        autoplaySpeed: 2000,
                    }
                }
            ]
        });


   $('.slick-industries').slick({
    infinite: false,              
    slidesToShow: 4,             
    slidesToScroll: 1,    
    rtl: false,
    autoplay: false,
	swipeToSlide: true,
//     waitForAnimate: false,              
    autoplaySpeed: 2000,         
    speed: 1500,
    touchThreshold: 10,                    
    arrows: false,               
    dots: false,                 
    responsive: [
        {
            breakpoint: 1025,    
            settings: {
                infinite: true,    // Important to add
                slidesToShow: 2,    
                slidesToScroll: 1,
                autoplay: true,
                dots: true,     
                autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 768,     
            settings: {
                infinite: true,    // Important to add
                slidesToShow: 1,    
                slidesToScroll: 1,
                autoplay: true, 
                dots: true,    
                autoplaySpeed: 2000,
            }
        }
    ]
});



        jQuery(document).ready(function($) {
            // Initialize Slick Slider for Case Studies
            $('.case-studies-slider').on('init', function(event, slick) {
                updateSlideCounter(slick);
            });

            $('.case-studies-slider').on('afterChange', function(event, slick, currentSlide) {
                updateSlideCounter(slick);
            });

            $('.case-studies-slider').slick({
                dots: true,
                arrows: false,
                autoplay: true,
				rtl: false,// Scroll 1 slide at a time
				adaptiveHeight: false,
 				autoplaySpeed: 2000,
    		    speed: 1500,
				rtl: false,
		
                touchThreshold: 10,
				infinite: true,
                draggable: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });

        // Function to update the counter
            function updateSlideCounter(slick) {
                var currentSlide = slick.slickCurrentSlide() + 1; // Current slide (1-indexed)
                var totalSlides = slick.slideCount; // Total number of slides

                // Format the counter with leading zeros (e.g., 01/01)
                var formattedCurrentSlide = ('0' + currentSlide).slice(-2);
                var formattedTotalSlides = ('0' + totalSlides).slice(-2);

                $('.crsl-counters .current-slide').text(formattedCurrentSlide);
                $('.crsl-counters .total-slides').text(formattedTotalSlides);
            }
    });



// end 

});



// javascript start from here

const whiteSections = document.querySelectorAll('.white_bg');

// Create a new Intersection Observer for white sections
const whiteObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // If section is in viewport (with 100px buffer), add 'darks' class
        if (entry.isIntersecting) {
            document.querySelector('.main_header').classList.add('darks');
        } else {
            // If section is not in viewport, remove 'darks' class
            document.querySelector('.main_header').classList.remove('darks');
        }
    });
}, {
    rootMargin: '0% 0% -100% 0%', // Trigger 100px before section comes into view
    threshold: 0 // Trigger as soon as any part of the section is 100px away from the viewport
});

// Observe each section with the class '.white_bg'
whiteSections.forEach(section => {
    whiteObserver.observe(section);
});





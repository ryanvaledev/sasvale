jQuery(document).ready(function($) {


  function isMobileOrTablet() {
    return window.innerWidth <= 1024;
  }

  if (isMobileOrTablet()) {
    $('.elementor-nav-menu li.menu-item-has-children > a').on('touchstart click', function(e) {
      const $this = $(this);
      const parentLi = $this.parent('li');

      if (parentLi.hasClass('submenu-open')) {
        // Submenu already open → close it
        e.preventDefault();
        parentLi.removeClass('submenu-open');
        parentLi.children('.sub-menu').slideUp(200);
      } else {
        // Open the submenu and close others
        e.preventDefault();
        $('.elementor-nav-menu li.menu-item-has-children').removeClass('submenu-open');
        $('.elementor-nav-menu li .sub-menu').slideUp(200);

        parentLi.addClass('submenu-open');
        parentLi.children('.sub-menu').slideDown(200);
      }
    });

    // Close submenus on outside click
    $(document).on('touchstart click', function(e) {
      if (!$(e.target).closest('.elementor-nav-menu').length) {
        $('.elementor-nav-menu li.menu-item-has-children').removeClass('submenu-open');
        $('.elementor-nav-menu li .sub-menu').slideUp(200);
      }
    });
  }



$('a, button').on('touchstart', function () {
  const $el = $(this);
  if (!$el.data('tapped')) {
    $el.data('tapped', true);
    $el.focus(); // This triggers :focus styles on first tap
    setTimeout(() => $el.data('tapped', false), 300); // Reset after short delay
  }
});






$('.mega_bg').hover(
    function() {
      $('html, body').addClass('no-scroll-y');
    },
    function() {
      $('html, body').removeClass('no-scroll-y');
    }
  );

(function($) {
    $.fn.disableScroll = function() {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        $('html, body')
            .stop(true) // Stop any running animation
            .css({
                'overflow-y': 'hidden',
                'transition': 'padding-right 0s linear'
            });

        $('body')
            .stop(true)
            .animate({ 'paddingRight': scrollbarWidth }, 0);
    };

    $.fn.enableScroll = function() {
        $('html, body')
            .stop(true)
            .css({
                'overflow-y': '',
                'transition': 'padding-right 0s linear'
            });

        $('body')
            .stop(true)
            .animate({ 'paddingRight': 0 }, 0);
    };
})(jQuery);

jQuery(document).ready(function($) {
    $('.mega_bg').hover(
        function() {
            $(window).disableScroll(); // Lock scroll with padding animation
        },
        function() {
            $(window).enableScroll(); // Unlock scroll and reset padding
        }
    );
});

	
 $('.dark.main_header').addClass('darks');
    $('.single-blog .main_header').addClass('darks');
$('.search-results .main_header').addClass('darks');
    $('.page-template-main_sub_services_template .main_header').addClass('darks');

//     $('.page-template-industries_detail_page .main_header').addClass('darks');




    $(window).on('scroll', function() {
        if ($(this).scrollTop() <= 100) { // Replace 100 with your desired scroll position
            $('.single-blog .main_header').addClass('darks');
            $('.page-template-main_sub_services_template .main_header').addClass('darks');
            $('.search-results .main_header').addClass('darks');
            $('.author .main_header').addClass('darks');
            $('.dark.main_header').addClass('darks');

        } 
    });


// Function to set the largest height to all .hgt elements
        function setMaxHeight() {
            var maxHeight = 0; // Initialize maxHeight to 0
    
            // Loop through all .mn-hgt .hgt elements to find the maximum height
            $('.mn-hgt .hgt').each(function() {
                var currentHeight = $(this).outerHeight(); // Get the outer height of the current .hgt element
                if (currentHeight > maxHeight) {
                    maxHeight = currentHeight; // Update maxHeight if currentHeight is greater
                }
            });
    
            // Set the maxHeight to all .hgt elements within .mn-hgt
            $('.mn-hgt .hgt').css('min-height', maxHeight + 'px'); // Apply min-height based on the largest height
        }
  
            // Call the function on page load to set the heights
            setMaxHeight();
        
            // Call the function on window resize to adjust height dynamically
            $(window).resize(function() {
                setMaxHeight();
            });

            // Call the function on window resize to adjust height dynamically
            $(window).on('load',function() {
                setMaxHeight();
            });
  
  
    // You can also listen for other events if needed, like orientation change (on mobile devices)
            $(window).on('orientationchange', function() {
                setMaxHeight(); // Recalculate on orientation change (for mobile/tablets)
            });






 
    // Function to set the largest height to all .hgt elements in each .mns-hgt section
        function setMaxHeights() {
            // Loop through each .mns-hgt section
            $('.mns-hgt').each(function() {
                var maxHeight = 0; // Initialize maxHeight for each section
    
                // Loop through all .hgt elements within the current .mns-hgt section
                $(this).find('.hgt').each(function() {
                    var currentHeight = $(this).outerHeight(); // Get the outer height of the current .hgt element
                    if (currentHeight > maxHeight) {
                        maxHeight = currentHeight; // Update maxHeight if currentHeight is greater
                    }
                });
    
                // After determining the maximum height, set that height to all .hgt elements within this section
                $(this).find('.hgt').css('min-height', maxHeight + 'px'); // Set min-height to the largest height
            });
        }

    // Call the function on page load
         setMaxHeights();

    // Call the function on window resize to adjust height dynamically
        $(window).resize(function() {
            setMaxHeights();
        });
     // Call the function on window resize to adjust height dynamically
        $(window).on('load',function() {
            setMaxHeights();
        });
  // You can also listen for other events if needed, like orientation change (on mobile devices)
        $(window).on('orientationchange', function() {
            setMaxHeights(); // Recalculate on orientation change (for mobile/tablets)
        });

$(window).on('load resize orientationchange', function () {
  setTimeout(setMaxHeights, 100); // slight delay improves accuracy
});


     $('.rpt-loop').slick({
            infinite: true,              
            slidesToShow: 7,   
            touchThreshold: 10,    
            draggable: true, 
            slidesToScroll: 1,          
            autoplay: true,    
 			swipeToSlide: true,
//    		 	waitForAnimate: false,          
            autoplaySpeed: 2000,         // Autoplay speed (in milliseconds, 2000ms = 2 seconds)
            speed: 1500,                  // Transition speed between slides (in milliseconds)
            arrows: false,               // Disable navigation arrows
            dots: false,                 // Disable pagination dots
            responsive: [
                {
                    breakpoint: 1660,    // Tablet size: Adjust number of items shown at 1024px width
                    settings: {
                        slidesToShow: 6,    // Show 4 slides on tablet
                        slidesToScroll: 1,
                        autoplay: true,     // Autoplay on tablet as well
                        autoplaySpeed: 1500,
                    }
                }, {
                    breakpoint: 1025,    // Tablet size: Adjust number of items shown at 1024px width
                    settings: {
                        slidesToShow: 4,    // Show 4 slides on tablet
                        slidesToScroll: 1,
                        autoplay: true,     // Autoplay on tablet as well
                        autoplaySpeed: 1500,
                    }
                },
                {
                    breakpoint: 768,     // Mobile size: Adjust number of items shown at 768px width
                    settings: {
                        slidesToShow: 3,    // Show 2 slides on mobile
                        slidesToScroll: 1,
                        autoplay: true,     // Autoplay on mobile
                        autoplaySpeed: 1500,
                    }
                }
            ]
        });



// Base responsive handler
function handleResponsiveSlick(selector, options) {
  if ($(window).width() <= 1024 && !$(selector).hasClass('slick-initialized')) {
    $(selector).slick(options);
  } else if ($(window).width() > 1024 && $(selector).hasClass('slick-initialized')) {
    $(selector).slick('unslick');
  }
}

// Shared slick settings
const baseSlickOptions = {
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1500,
  rtl: false,
  adaptiveHeight: false,
  touchThreshold: 10,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true
      }
    }
  ]
};

// Individual slider initializers
function initEnhanceRepeaterSlider() {
  handleResponsiveSlick('.enhance-reapter', baseSlickOptions);
}

function initMethodRepeaterSlider() {
  handleResponsiveSlick('.method_repeater', baseSlickOptions);
}

function initComponentsRepeaterSlider() {
  handleResponsiveSlick('.components_repeater', baseSlickOptions);
}

function initSubFoundationsSlider() {
  handleResponsiveSlick('.sub_foundations', baseSlickOptions);
}

// On document ready and window resize
jQuery(document).ready(function () {
  initEnhanceRepeaterSlider();
  initMethodRepeaterSlider();
  initComponentsRepeaterSlider();
  initSubFoundationsSlider();

  jQuery(window).on('resize', function () {
    initEnhanceRepeaterSlider();
    initMethodRepeaterSlider();
    initComponentsRepeaterSlider();
    initSubFoundationsSlider();
  });
});






});





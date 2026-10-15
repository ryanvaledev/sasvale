(function($){

    // Run when Elementor frontend is initialized
    $(window).on('elementor/frontend/init', function() {

        // Elementor global hook, runs after widgets render
        elementorFrontend.hooks.addAction('frontend/element_ready/global', function() {

            let faqWrapper = document.querySelector('.faqs_schema');
            if(!faqWrapper) return;

            // Remove old FAQ schema to prevent duplicates
            let existing = document.querySelector('script#faq-schema');
            if(existing) existing.remove();

            let faqs = [];

            faqWrapper.querySelectorAll('.inner-faqs').forEach(function(item) {
                let questionEl = item.querySelector('.faqs-header .fourth-head');
                let answerEl = item.querySelector('.body-txt');

                if(!questionEl || !answerEl) return;

                faqs.push({
                    "@type": "Question",
                    "name": questionEl.innerText.trim(),
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": answerEl.innerText.trim()
                    }
                });
            });

            if(!faqs.length) return;

            let schema = {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "@id": window.location.href,
                "mainEntity": faqs
            };

            let script = document.createElement('script');
            script.type = "application/ld+json";
            script.id = "faq-schema"; // mark this script so we can remove it next time
            script.text = JSON.stringify(schema, null, 2);

            document.head.appendChild(script);

            // Optional: debug
            // console.log("FAQ schema injected:", schema);

        }); // end element_ready hook
    });

})(jQuery);
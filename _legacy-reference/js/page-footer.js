/* --- Footer Interactivity & Initializations --- */

document.addEventListener("DOMContentLoaded", function () { if (typeof SmoothScroll !== 'undefined') { SmoothScroll({ animationTime: 800, stepSize: 100, accelerationDelta: 50, accelerationMax: 3, keyboardSupport: true, arrowScroll: 50, pulseAlgorithm: true, pulseScale: 4, pulseNormalize: 1, touchpadSupport: false }); } });

window.$zoho = window.$zoho || {}; $zoho.salesiq = $zoho.salesiq || { ready: function(){} };

document.addEventListener("DOMContentLoaded", function () { if (window.innerWidth > 786) { const el = document.querySelector('.crsr'); if (el && !el.querySelector('img')) { el.innerHTML = '<img src="assets/images/new-project-1.png" alt="Fleek Cursor" />'; } } });
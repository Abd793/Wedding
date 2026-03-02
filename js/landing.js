;(function () {
  'use strict';

  var landing = document.getElementById('landing');
  if (!landing) {
    return;
  }

  var seal = landing.querySelector('.seal');
  var musicToggle = document.getElementById('music-toggle');

  var openLanding = function () {
    if (landing.classList.contains('is-open')) {
      return;
    }

    landing.classList.add('is-open');
    document.body.classList.remove('landing-lock');
    landing.setAttribute('aria-hidden', 'true');

    if (musicToggle) {
      musicToggle.click();
    }

    window.setTimeout(function () {
      if (landing.parentNode) {
        landing.parentNode.removeChild(landing);
      }
    }, 2600);
  };

  if (seal) {
    seal.addEventListener('click', openLanding);
    seal.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openLanding();
      }
    });
  }

  if (window.matchMedia('(max-width: 768px)').matches) {
    landing.addEventListener('click', openLanding);
  }
})();

;(function () {
  'use strict';

  var hero = document.querySelector('.hero-cover');
  if (!hero) {
    return;
  }

  var current = 0;
  var target = 0;
  var rafId = null;

  var easeInOut = function (t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  var update = function () {
    rafId = null;

    current += (target - current) * 0.08;
    var eased = easeInOut(current);
    var posY = 60 + 8 * eased;
    hero.style.backgroundPosition = 'center ' + posY + '%';

    if (Math.abs(target - current) > 0.001) {
      rafId = window.requestAnimationFrame(update);
    }
  };

  var onScroll = function () {
    var scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
    var max = hero.offsetHeight || window.innerHeight;
    target = Math.min(1, Math.max(0, scrollY / max));
    if (!rafId) {
      rafId = window.requestAnimationFrame(update);
    }
  };

  onScroll();

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
})();

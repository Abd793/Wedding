;(function () {
  'use strict';

  var audio = document.getElementById('bg-music');
  var toggle = document.getElementById('music-toggle');
  if (!audio || !toggle) {
    return;
  }

  var label = toggle.querySelector('.music-label');

  var getLabel = function (playing) {
    if (window.I18N && typeof window.I18N.t === 'function') {
      return playing ? window.I18N.t('music.on') : window.I18N.t('music.off');
    }
    return playing ? 'Music On' : 'Music Off';
  };

  var setState = function (playing) {
    toggle.classList.toggle('is-playing', playing);
    toggle.setAttribute('aria-pressed', playing ? 'true' : 'false');
    if (label) {
      label.textContent = getLabel(playing);
    }
  };

  var play = function () {
    audio.volume = 0.35;
    var result = audio.play();
    if (result && typeof result.then === 'function') {
      result.then(function () {
        setState(true);
      }).catch(function () {
        setState(false);
      });
    } else {
      setState(!audio.paused);
    }
  };

  var pause = function () {
    audio.pause();
    setState(false);
  };

  toggle.addEventListener('click', function () {
    if (audio.paused) {
      play();
    } else {
      pause();
    }
  });

  var unlock = function () {
    if (!audio.paused) {
      return;
    }
    play();
  };

  ['click', 'touchstart', 'keydown'].forEach(function (eventName) {
    document.addEventListener(eventName, unlock, { once: true, passive: true });
  });

  document.addEventListener('lang:changed', function () {
    setState(!audio.paused);
  });

  setState(false);
})();

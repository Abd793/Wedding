;(function () {
  'use strict';

  var translations = {
    en: {
      nav: {
        home: 'Home',
        events: 'Events',
        gallery: 'Gallery',
        highlights: 'Highlights'
      },
      hero: {
        loveLine: '"I have found the one whom my soul loves."',
        saveDate: 'Save our date'
      },
      events: {
        title: 'Events',
        wedding: 'Wedding',
        date: '01 April 2026',
        at: 'At'
      },
      program: {
        title: 'Day Program',
        subtitle: 'What we have planned for you',
        welcome: { title: 'Guest Reception', desc: 'Welcoming guests' },
        ceremony: { title: 'Bride & Groom Entrance', desc: 'Grand entrance of the couple' },
        cake: { title: "Girls' Dance", desc: 'Dance performance' },
        dance: { title: 'Groom Entrance & Cake Cutting', desc: 'Entrance and cake ceremony' },
        end: { title: 'Families Entrance', desc: 'Entrance of bride and groom families' }
      },
      info: {
        title: 'Important Information',
        car: {
          q: 'Can I drive my own car?',
          a: 'Of course. There is plenty of parking at the venue for those who prefer to drive.'
        },
        kids: {
          q: 'Can children attend?',
          a: 'We want this day to be a special celebration for adults. We appreciate if you arrange childcare for the little ones so we can all enjoy the party together.'
        }
      },
      highlights: {
        title: 'Highlights'
      },
      music: {
        on: 'Music On',
        off: 'Music Off',
        toggle: 'Play background music'
      },
      landing: {
        open: 'Open invitation'
      }
    },
    de: {
      nav: {
        home: 'Startseite',
        events: 'Events',
        gallery: 'Galerie',
        highlights: 'Highlights'
      },
      hero: {
        loveLine: '"Ich habe den gefunden, den meine Seele liebt."',
        saveDate: 'Datum merken'
      },
      events: {
        title: 'Events',
        wedding: 'Hochzeit',
        date: '01. April 2026',
        at: 'Bei'
      },
      program: {
        title: 'Tagesprogramm',
        subtitle: 'Was wir für euch geplant haben',
        welcome: { title: 'Empfang der Gäste', desc: 'Begrüßung der Gäste' },
        ceremony: { title: 'Einzug des Brautpaares', desc: 'Großer Einzug des Paares' },
        cake: { title: 'Tanz der Mädchen', desc: 'Tanzaufführung' },
        dance: { title: 'Einzug des Bräutigams & Tortenanschnitt', desc: 'Einzug und Tortenzeremonie' },
        end: { title: 'Einzug der Familien', desc: 'Einzug der Familien von Braut und Bräutigam' }
      },
      info: {
        title: 'Wichtige Informationen',
        car: {
          q: 'Kann ich mit dem eigenen Auto kommen?',
          a: 'Natürlich. Am Veranstaltungsort gibt es ausreichend Parkplätze für alle, die mit dem Auto kommen möchten.'
        },
        kids: {
          q: 'Können Kinder teilnehmen?',
          a: 'Wir möchten, dass dieser Tag eine besondere Feier für Erwachsene ist. Bitte organisiert eine Betreuung für die Kleinen, damit wir gemeinsam feiern können.'
        }
      },
      highlights: {
        title: 'Highlights'
      },
      music: {
        on: 'Musik an',
        off: 'Musik aus',
        toggle: 'Hintergrundmusik abspielen'
      },
      landing: {
        open: 'Einladung öffnen'
      }
    },
    ar: {
      nav: {
        home: 'الرئيسية',
        events: 'الفعاليات',
        gallery: 'المعرض',
        highlights: 'أبرز اللحظات'
      },
      hero: {
        loveLine: '"لقد وجدتُ من تحبه نفسي."',
        saveDate: 'احفظوا التاريخ'
      },
      events: {
        title: 'الفعاليات',
        wedding: 'الزفاف',
        date: '01 أبريل 2026',
        at: 'في'
      },
      program: {
        title: 'برنامج اليوم',
        subtitle: 'ما خططناه لكم',
        welcome: { title: 'استقبال الضيوف', desc: 'الترحيب بالضيوف' },
        ceremony: { title: 'دخول العرسان', desc: 'الدخول الرسمي للعروسين' },
        cake: { title: 'رقص الفتيات', desc: 'فقرة رقص' },
        dance: { title: 'دخول العريس وتقطيع الكيك', desc: 'دخول العريس وفقرة تقطيع الكيك' },
        end: { title: 'دخول أهل العروس والعريس', desc: 'دخول أهل العروس وأهل العريس' }
      },
      info: {
        title: 'معلومات مهمة',
        car: {
          q: 'هل يمكنني القدوم بسيارتي؟',
          a: 'بالطبع. تتوفر مواقف كافية في المكان لمن يفضلون القدوم بالسيارة.'
        },
        kids: {
          q: 'هل يمكن للأطفال الحضور؟',
          a: 'نود أن يكون هذا اليوم احتفالًا مميزًا للبالغين. نرجو ترتيب رعاية للأطفال حتى نستمتع جميعًا بالحفل معًا.'
        }
      },
      highlights: {
        title: 'أبرز اللحظات'
      },
      music: {
        on: 'الموسيقى تعمل',
        off: 'الموسيقى متوقفة',
        toggle: 'تشغيل موسيقى الخلفية'
      },
      landing: {
        open: 'افتح الدعوة'
      }
    }
  };

  var defaultLang = 'ar';
  var storageKey = 'wedding_lang';
  var currentLang = defaultLang;

  var resolveKey = function (obj, key) {
    return key.split('.').reduce(function (acc, part) {
      return acc && acc[part] !== undefined ? acc[part] : undefined;
    }, obj);
  };

  var translate = function (lang, key) {
    var value = resolveKey(translations[lang] || {}, key);
    if (value === undefined) {
      value = resolveKey(translations.en, key);
    }
    return value !== undefined ? value : key;
  };

  var applyTranslations = function (lang) {
    currentLang = lang;
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      el.textContent = translate(lang, key);
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      el.innerHTML = translate(lang, key);
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var map = el.getAttribute('data-i18n-attr');
      if (!map) {
        return;
      }
      map.split(';').forEach(function (pair) {
        var parts = pair.split(':');
        if (parts.length !== 2) {
          return;
        }
        var attr = parts[0].trim();
        var key = parts[1].trim();
        if (!attr || !key) {
          return;
        }
        el.setAttribute(attr, translate(lang, key));
      });
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', isActive);
    });

    document.dispatchEvent(new CustomEvent('lang:changed', { detail: { lang: lang } }));
  };

  var setLanguage = function (lang, persist) {
    if (!translations[lang]) {
      lang = defaultLang;
    }
    applyTranslations(lang);
    if (persist) {
      try {
        localStorage.setItem(storageKey, lang);
      } catch (err) {
        // ignore
      }
    }
  };

  document.addEventListener('DOMContentLoaded', function () {
    var saved = null;
    try {
      saved = localStorage.getItem(storageKey);
    } catch (err) {
      saved = null;
    }

    var initial = saved || defaultLang;
    setLanguage(initial, false);

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = btn.getAttribute('data-lang');
        setLanguage(lang, true);
      });
    });
  });

  window.I18N = {
    t: function (key) {
      return translate(currentLang, key);
    },
    setLanguage: function (lang) {
      setLanguage(lang, true);
    },
    getLanguage: function () {
      return currentLang;
    }
  };
})();

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
        cake: { title: 'Bride Celebration', desc: 'Groom break outside the hall and women-only atmosphere.' },
        dance: { title: 'Groom Entrance', desc: 'Cake cutting and wedding ring exchange' },
        end: { title: 'Reception of Bride and Groom Families', desc: 'Entrance of both families and sharing joyful moments' }
      },
      info: {
        title: 'Important Information',
        car: {
          q: 'Can I drive my own car?',
          a: 'Of course. There is plenty of parking at the venue for those who prefer to drive.'
        },
        kids: {
          q: 'Can children attend?',
          a: 'We confirm that the celebration is strictly for adults only. Any child will be politely refused entry at the door. Please fully comply without exception.'
        },
        photo: {
          q: 'Is photography allowed during the celebration?',
          a: 'Please strictly refrain from all photography to protect the privacy of the celebration. The use of any recording device is prohibited under all circumstances. Any violation will result in immediate deletion of content and leaving the hall.'
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
        cake: { title: 'Feier für die Braut', desc: 'Pause für den Bräutigam außerhalb des Saals und eine Atmosphäre nur für Frauen.' },
        dance: { title: 'Einzug des Bräutigams', desc: 'Tortenanschnitt und Austausch der Eheringe' },
        end: { title: 'Empfang der Familien von Braut und Bräutigam', desc: 'Einzug beider Familien und gemeinsame Freudenmomente' }
      },
      info: {
        title: 'Wichtige Informationen',
        car: {
          q: 'Kann ich mit dem eigenen Auto kommen?',
          a: 'Natürlich. Am Veranstaltungsort gibt es ausreichend Parkplätze für alle, die mit dem Auto kommen möchten.'
        },
        kids: {
          q: 'Können Kinder teilnehmen?',
          a: 'Wir bestätigen ausdrücklich, dass die Feier ausschließlich für Erwachsene ist. Jedes Kind wird am Eingang höflich abgewiesen. Wir bitten um vollständige Einhaltung ohne Ausnahmen.'
        },
        photo: {
          q: 'Ist Fotografieren während der Feier erlaubt?',
          a: 'Bitte fotografiert ausnahmslos nicht, um die Privatsphäre der Feier zu schützen. Die Nutzung jedes Aufnahmegeräts ist unter allen Umständen untersagt. Jeder Verstoß führt zur sofortigen Löschung der Inhalte und zum Verlassen des Saals.'
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
        cake: { title: 'احتفال بالعروس', desc: 'استراحة العريس خارج القاعة و أجواء للنساء فقط.' },
        dance: { title: 'دخول العريس', desc: 'تقطيع الكيك و تبديل خواتم الزواج' },
        end: { title: 'استقبال اهل العروس و العريس', desc: 'دخول أسرتي العروسين ومشاركتهم لحظات الفرح' }
      },
      info: {
        title: 'معلومات مهمة',
        car: {
          q: 'هل يمكنني القدوم بسيارتي؟',
          a: 'بالطبع. تتوفر مواقف كافية في المكان لمن يفضلون القدوم بالسيارة.'
        },
        kids: {
          q: 'هل يمكن للأطفال الحضور؟',
          a: 'نؤكد بشكل قاطع أن الحفل مخصص للبالغين فقط، وأي طفل سيتم الاعتذار عن استقباله عند الدخول. نرجو الالتزام التام دون استثناء.'
        },
        photo: {
          q: 'هل يُسمح بالتصوير خلال الحفل؟',
          a: 'يرجى الالتزام بعدم التصوير نهائيًا حفاظًا على خصوصية الحفل، ويُمنع استخدام أي جهاز تصوير تحت أي ظرف. أي مخالفة ستؤدي إلى طلب حذف المحتوى فورًا و مغادرة القاعة.'
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

const I18n = {
  locale: 'tr',
  fallback: 'en',
  strings: {},
  loaded: false,

  async init(locale) {
    this.locale = locale || 'tr';
    await this.load(this.locale);
  },

  async load(locale) {
    try {
      const resp = await fetch(`js/locales/${locale}.json`);
      this.strings = await resp.json();
      this.loaded = true;
    } catch {
      if (locale !== this.fallback) {
        await this.load(this.fallback);
      } else {
        this.strings = {};
        this.loaded = true;
      }
    }
  },

  t(key, ...args) {
    let s = this.strings[key];
    if (s === undefined) s = key;
    if (args.length > 0) {
      args.forEach((arg, i) => { s = s.replace(`{${i}}`, arg); });
    }
    return s;
  },

  async setLocale(locale) {
    this.locale = locale;
    await this.load(locale);
    document.documentElement.lang = locale;
  }
};

window.I18n = I18n;

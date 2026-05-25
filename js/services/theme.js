const ThemeManager = {
  current: 'dark',
  systemDark: false,

  init(theme) {
    this.systemDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    window.matchMedia?.('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      this.systemDark = e.matches;
      if (this.current === 'system') this.apply();
    });
    this.current = theme || 'dark';
    this.apply();
  },

  apply() {
    const theme = this.current === 'system'
      ? (this.systemDark ? 'dark' : 'light')
      : this.current;
    this._setCSS(theme);
    document.documentElement.setAttribute('data-theme', this.current);
  },

  _setCSS(theme) {
    if (theme === 'light') {
      document.documentElement.style.setProperty('--bg', '#f5f5f5');
      document.documentElement.style.setProperty('--surface', '#ffffff');
      document.documentElement.style.setProperty('--surface2', '#f0f0f0');
      document.documentElement.style.setProperty('--surface3', '#e0e0e0');
      document.documentElement.style.setProperty('--border', '#d0d0d0');
      document.documentElement.style.setProperty('--text', '#222222');
      document.documentElement.style.setProperty('--text2', '#888888');
    } else {
      document.documentElement.style.setProperty('--bg', '#0a0a0a');
      document.documentElement.style.setProperty('--surface', '#141414');
      document.documentElement.style.setProperty('--surface2', '#1e1e1e');
      document.documentElement.style.setProperty('--surface3', '#2a2a2a');
      document.documentElement.style.setProperty('--border', '#2e2e2e');
      document.documentElement.style.setProperty('--text', '#e8e8e8');
      document.documentElement.style.setProperty('--text2', '#888888');
    }
  },

  setTheme(theme) {
    this.current = theme;
    this.apply();
  },

  getTheme() {
    return this.current;
  }
};

window.ThemeManager = ThemeManager;

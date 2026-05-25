const ShortcutManager = {
  defaults: {
    undo:          { key: 'z', ctrl: true, shift: false, alt: false },
    redo:          { key: 'y', ctrl: true, shift: false, alt: false },
    save:          { key: 's', ctrl: true, shift: false, alt: false },
    saveAs:        { key: 's', ctrl: true, shift: true,  alt: false },
    copy:          { key: 'c', ctrl: true, shift: false, alt: false },
    paste:         { key: 'v', ctrl: true, shift: false, alt: false },
    bold:          { key: 'b', ctrl: true, shift: false, alt: false },
    italic:        { key: 'i', ctrl: true, shift: false, alt: false },
    underline:     { key: 'u', ctrl: true, shift: false, alt: false },
    delete:        { key: 'Delete', ctrl: false, shift: false, alt: false },
    presentation:  { key: 'F5', ctrl: false, shift: false, alt: false },
    close:         { key: 'Escape', ctrl: false, shift: false, alt: false }
  },

  bindings: {},
  handlers: {},
  listeners: [],

  init(customBindings) {
    this.bindings = {};
    const allKeys = new Set([...Object.keys(this.defaults), ...Object.keys(customBindings || {})]);
    for (const action of allKeys) {
      this.bindings[action] = customBindings?.[action]
        ? { ...this.defaults[action], ...customBindings[action] }
        : { ...this.defaults[action] };
    }
  },

  getDisplay(action) {
    const b = this.bindings[action];
    if (!b) return '';
    const parts = [];
    if (b.ctrl) parts.push('Ctrl');
    if (b.alt) parts.push('Alt');
    if (b.shift) parts.push('Shift');
    parts.push(b.key);
    return parts.join('+');
  },

  formatKey(key) {
    const map = {
      'Delete': 'Del', 'Backspace': 'Bksp', 'Escape': 'Esc',
      'ArrowLeft': '←', 'ArrowRight': '→', 'ArrowUp': '↑', 'ArrowDown': '↓'
    };
    return map[key] || key;
  },

  getDisplayFormatted(action) {
    const b = this.bindings[action];
    if (!b) return '';
    const parts = [];
    if (b.ctrl) parts.push('Ctrl');
    if (b.alt) parts.push('Alt');
    if (b.shift) parts.push('Shift');
    parts.push(this.formatKey(b.key));
    return parts.join('+');
  },

  register(action, handler) {
    this.handlers[action] = handler;
  },

  match(e) {
    for (const [action, b] of Object.entries(this.bindings)) {
      const keyMatch = e.key === b.key;
      const ctrlMatch = b.ctrl ? (e.ctrlKey || e.metaKey) : !(e.ctrlKey || e.metaKey);
      const shiftMatch = !!e.shiftKey === !!b.shift;
      const altMatch = !!e.altKey === !!b.alt;
      if (keyMatch && ctrlMatch && shiftMatch && altMatch) {
        return action;
      }
    }
    return null;
  },

  handleKeyDown(e) {
    const action = this.match(e);
    if (action && this.handlers[action]) {
      e.preventDefault();
      e.stopPropagation();
      this.handlers[action](e);
      return true;
    }
    return false;
  },

  getBindings() {
    return { ...this.bindings };
  },

  setBinding(action, binding) {
    if (this.bindings[action]) {
      this.bindings[action] = { ...binding };
    }
  },

  resetAll() {
    this.bindings = {};
    for (const [action, b] of Object.entries(this.defaults)) {
      this.bindings[action] = { ...b };
    }
  }
};

window.ShortcutManager = ShortcutManager;

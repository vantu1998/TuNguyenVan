import { Injectable } from '@angular/core';
import cssVars from 'css-vars-ponyfill';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  themes = Themes;

  constructor() {
  }

  /**
   * Allow set theme of system base base on option
   * @param option
   * @private
   */
  private setTheme(option: 'default' | 'special'): void {
    let theme;
    if (option === 'default') {
      theme = this.themes[0];
    }
    if (option === 'special') {
      theme = this.themes[1];
    }
    cssVars(theme);
  }

  /**
   * Set default theme
   */
  setDefaultTheme() {
    this.setTheme('default');
  }

  /**
   * Set special theme
   */
  setSpecialTheme() {
    this.setTheme('special');
  }
}

export const Themes = [
  {
    onlyLegacy: true,
    watch: true,
    preserveStatic: false,
    silent: false,
    variables: {
      '--mainColor': '#0c875f'
    }
  },
  {
    onlyLegacy: true,
    watch: true,
    silent: false,
    preserveStatic: false,
    variables: {
      '--mainColor': '#c05205'
    }
  }
];

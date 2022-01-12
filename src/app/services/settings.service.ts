import { Injectable } from '@angular/core';
import { GlobalHTMLAndCSSConstants } from '../shared/constants/GlobalCSSAtributtesConstants';
import { GlobalPropertiesConstants } from '../shared/constants/GlobalPropertiesConstants';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector(GlobalHTMLAndCSSConstants.ID_THEME);
  private readonly defaultTheme = `${GlobalHTMLAndCSSConstants.PATH_ASSETS_CSS_COLORS}/${GlobalHTMLAndCSSConstants.DEFAULT_THEME}${GlobalHTMLAndCSSConstants.CSS_EXTENSION}`;

  constructor() {
    const themeFromLocalStorage = localStorage.getItem(GlobalPropertiesConstants.LS_THEME);
    const url: string = themeFromLocalStorage ? themeFromLocalStorage : this.defaultTheme;
    this.linkTheme.setAttribute(GlobalPropertiesConstants.PROPERTY_HREF, url);
  }

  changeTheme(theme: string) {
    const url = `${GlobalHTMLAndCSSConstants.PATH_ASSETS_CSS_COLORS}/${theme}${GlobalHTMLAndCSSConstants.CSS_EXTENSION}`;
    this.linkTheme.setAttribute(GlobalPropertiesConstants.PROPERTY_HREF, url);
    localStorage.setItem(GlobalPropertiesConstants.LS_THEME, url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    const links: NodeListOf<Element> = document.querySelectorAll(GlobalHTMLAndCSSConstants.SELECTOR_CLASS_SELECTOR);

    links.forEach(element => {
      element.classList.remove(GlobalHTMLAndCSSConstants.CLASS_WORKING);

      const btnTheme = element.getAttribute(GlobalHTMLAndCSSConstants.ATTRIBUTE_DATA_THEME);

      const btnThemeUrl = `${GlobalHTMLAndCSSConstants.PATH_ASSETS_CSS_COLORS}/${btnTheme}${GlobalHTMLAndCSSConstants.CSS_EXTENSION}`;

      const currentTheme = this.linkTheme.getAttribute(GlobalPropertiesConstants.PROPERTY_HREF);

      if (btnThemeUrl === currentTheme) {
        element.classList.add(GlobalHTMLAndCSSConstants.CLASS_WORKING);
      }
    });

  }
}

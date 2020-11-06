import {Inject, Injectable, Renderer2} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {IsPlatformBrowserService} from "./is-platform-browser.service";

@Injectable({
  providedIn: 'root'
})
export class ScriptsLoaderService {


  // tslint:disable-next-line:variable-name
  constructor(@Inject(DOCUMENT) private _document , private isPlatformBrowserService: IsPlatformBrowserService) {
  }

// a renderer2 must be created at the component to access its DOM
  addScriptCDN(LinkCDN: string, renderer2: Renderer2) {
    const s = renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = LinkCDN;
    s.text = ``;
    renderer2.appendChild(this._document.body, s);
  }

// a renderer2 must be created at the component to access its DOM
  addScripts(renderer2: Renderer2, ...scriptsNames: string[]) {
    scriptsNames.forEach((scriptName: string) => {
      const s = renderer2.createElement('script');
      s.type = 'text/javascript';
      s.src = '../assets/js/' + scriptName + '.js';
      s.text = ``;
      renderer2.appendChild(this._document.body, s);
    });
  }

  // a renderer2 must be created at the component to access its DOM
  addScriptCustom(renderer2: Renderer2, script: string) {
    const s = renderer2.createElement('script');
    s.type = 'text/javascript';
    s.text = script;
    renderer2.appendChild(this._document.body, s);
  }


  // Paths should from /assets folder
  // example : /assets/js/myScript.js
  addOneScriptAsync(path): Promise<any> {
    if (!this.isPlatformBrowserService.isPlatformBrowser()) {return;}
    return new Promise((resolve, reject) => {
      const scriptElement = window.document.createElement('script');
      scriptElement.src = path;

      scriptElement.onload = () => {
        resolve();
      };
      scriptElement.onerror = () => {
        reject();
      };
      window.document.body.appendChild(scriptElement);
    });
  }

  // Paths should from /assets folder
  // example : /assets/js/myScript.js
  addManyScriptsAsync = async (...paths): Promise<void> => {
    for (const path of paths) {
      await this.addOneScriptAsync(path);
    }
  }

}

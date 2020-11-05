import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class IsPlatformBrowserService {

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
  }

  // this method determines if we are on the browser on not , we need it to solve angular
  // universal problems
  isPlatformBrowser() {
    return isPlatformBrowser(this.platformId);
  }
}

import {Injectable} from '@angular/core';


interface BrowserWindow extends Window {
    MathJax?: any;
}

declare let window: BrowserWindow;


function getWindow(): any {
  return window;
}


@Injectable()
export class WindowRefService {

  get nativeWindow(): any {
    return getWindow();
  }


}

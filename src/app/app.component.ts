import { Component } from '@angular/core';
import { SlimLoadingBarService } from "ng2-slim-loading-bar"; 
import {  
  NavigationStart,  
  NavigationEnd,  
  Event,  
  Router  
} from "@angular/router";  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(  
    private lBar: SlimLoadingBarService,  
    private _router: Router  
  ) {  
    this._router.events.subscribe((event: Event) => {  
      this.loadingBarInterceptor(event);  
    });  
  }  
  private loadingBarInterceptor(event: Event) {  
    if (event instanceof NavigationStart) {  
      this.lBar.start();  
    }  
    if (event instanceof NavigationEnd) {  
      this.lBar.complete();  
    }      
  }  
  toggle() {
    document.getElementById('menu').classList.toggle('active');
  }
  onActivate(event) {
    let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 40); 
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 16);
}
}

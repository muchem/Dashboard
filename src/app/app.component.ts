import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

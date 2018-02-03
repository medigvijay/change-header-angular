import { Component, OnInit, ElementRef, Renderer, Input } from '@angular/core';

import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(window:scroll)': 'onScroll($event)'
  }
})
export class AppComponent implements OnInit{
    isScrolled = false;
    currPos: Number = 0;
    startPos: Number = 0;
    changePos: Number = 100;

    constructor(private el: ElementRef, private renderer: Renderer) {
    }

    onScroll(evt) {
        /**
         * BAD BAD way to do this
         * window object can be wrapped as a service
         * and then be imported here
        */
        this.currPos = (window.pageYOffset || evt.target.scrollTop)  - (evt.target.clientTop || 0);
        if(this.currPos >= this.changePos ) {
            this.isScrolled = true;
        } else {
            this.isScrolled = false;
        }
    }

    initStateSave(evt) {
        //trigger an event so child components can listen and save their states
    }
    
    ngOnInit(){
    }
}

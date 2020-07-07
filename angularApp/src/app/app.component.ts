import { Component, OnInit } from '@angular/core';

declare function componentDidMount(): any;
declare function resizeHeaderOnScroll(): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    componentDidMount();
    resizeHeaderOnScroll();
  }
  
}

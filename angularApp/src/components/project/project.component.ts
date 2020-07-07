import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  // template: `
  // <div id="project" [ng-style]="{padding: '10px'}">
  //   <div [ng-style]="{backgroundColor: 'rgba(0,0,0,0.5)'}">
  //         <a href={{link}}><img src={{img}}></a>
  //     </div>
  //     <p [ng-style]="{color: 'black', position: 'relative', display: 'flex', justifyItems: 'center', alignItems: 'center'}">{{title}}</p>
  // </div>
  // `
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

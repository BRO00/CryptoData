import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  loggedIn: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked(){
    console.log('Learn was clicked')
  }
}

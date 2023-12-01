import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showVal = false;
  tabVal = false;
  showForm() {
    this.showVal = !this.showVal;
    this.tabVal = false;

  }
  showTab() {
    this.tabVal = !this.tabVal;
    this.showVal = false;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  toggleNav: boolean = true

  ngOnInit(): void {
  }

  navToggle(): void {
    this.toggleNav = !this.toggleNav
  }
}

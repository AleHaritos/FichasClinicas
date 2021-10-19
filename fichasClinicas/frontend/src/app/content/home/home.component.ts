import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  colorBar!: string
  color: string[] = ['primary', 'accent', 'warn', 'basic']
  num: number = 0
  constructor() { }

  ngOnInit(): void {
    this.changeColor()
  }

  changeColor(): void {
    setInterval(() => {
      if(this.num < 4) {
        this.colorBar = this.color[this.num]
        this.num = this.num + 1
      } else {
        this.num = 0
        this.colorBar = this.color[this.num]
      }
     
    }, 1500)
  }
  
}

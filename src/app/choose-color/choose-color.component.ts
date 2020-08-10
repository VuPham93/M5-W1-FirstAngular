import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-color',
  templateUrl: './choose-color.component.html',
  styleUrls: ['./choose-color.component.css']
})
export class ChooseColorComponent implements OnInit {
  color;
  constructor() { }

  ngOnInit(): void {
  }

}

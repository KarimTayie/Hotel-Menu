import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  clientName = 'Karim Sherif';
  roomNumber = 'A20';
  total = 0.00;

  constructor() { }

  ngOnInit() {
  }

}

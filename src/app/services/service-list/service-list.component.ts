import { Component, OnInit } from '@angular/core';

import { Service } from '../service.model';
import jServices from '../../../assets/data/service.json';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  services: Service[];

  constructor() { }

  ngOnInit() {
    this.services = jServices.services;
  }

}

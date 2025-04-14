import { Component, Input, OnInit } from '@angular/core';
import { MycheckService } from '../mycheck.service';

@Component({
  selector: 'app-myitem',
  standalone: true,
  imports: [],
  templateUrl: './myitem.component.html',
  styleUrl: './myitem.component.css'
})
export class MyitemComponent implements OnInit {
  message:string = '';

  constructor(private service:MycheckService) { }

  ngOnInit() {
    this.message = this.service.getPerson();
  }
  push(name:string, email:string) {
    this.service.push({name:name, email:email});
  }
}

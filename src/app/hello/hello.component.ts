import { Component, OnInit } from '@angular/core';
import { MycheckService } from '../mycheck.service';
import { MyitemComponent } from '../myitem/myitem.component';
import { MydataComponent } from '../mydata/mydata.component';


@Component ({
  selector: 'app-hello',
  standalone: true,
  imports:[MyitemComponent, MydataComponent],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css',
})

export class HelloComponent implements OnInit {
  title = 'hello-app';
  message = '';
  
  constructor(private service:MycheckService) { 
    service.name = 'Hanako';
    service.getPerson();
  }
  
  ngOnInit() { 
    this.message = this.service.hello("Hanako");
  }

  doit(name:string) {
    this.service.name = name;
    this.message = this.service.getPerson();
  } 
}

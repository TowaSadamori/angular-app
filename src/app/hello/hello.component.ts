import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyitemComponent } from '../myitem/myitem.component';


@Component ({
  selector: 'app-hello',
  standalone: true,
  imports:[CommonModule, MyitemComponent],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css',
})
export class HelloComponent implements OnInit {
  title = 'Hello World';
  message = 'Hello, Angular!';
  defaultMessage = 'Hello!';

  ngOnInit() { } 
}

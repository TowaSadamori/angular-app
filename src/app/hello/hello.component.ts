import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component ({
  selector: 'app-hello',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css',
})
export class HelloComponent implements OnInit {
  title = 'Hello World';
  message = 'Hello, Angular!';
  isTemplateVisible = false;
  count:number[] = [];
  msg1 = 'First Message';
  msg2 = 'Second Message';

  shoeTemplate() {
    this.isTemplateVisible = !this.isTemplateVisible;
  }

  countUp(n:number) {
    if (this.count[n] === undefined) {
      this.count[n] = 0;
    }
    this.count[n]++;
  }
  
    ngOnInit() { }

}
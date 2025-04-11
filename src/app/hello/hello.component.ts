import { Component, OnInit } from '@angular/core';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';

@Component ({
  selector: 'app-hello',
  standalone: true,
  imports:[CurrencyPipe, DatePipe, TitleCasePipe],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css',
})
export class HelloComponent implements OnInit {
  title = 'hello angular world!';
  price = 0;
  date = new Date();

  updatePrice(newvalue: number): void {
    this.price = (newvalue * 1.1);
  }

  ngOnInit() { } 
}

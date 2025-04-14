import { Component } from '@angular/core';
import { MycheckService } from '../mycheck.service';

@Component({
  selector: 'app-mydata',
  standalone: true,
  imports: [],
  templateUrl: './mydata.component.html',
  styleUrl: './mydata.component.css'
})
export class MydataComponent {

  constructor(private service:MycheckService) { }

  list() {
    return this.service.json();
  }

}

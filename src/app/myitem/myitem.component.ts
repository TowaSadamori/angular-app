import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-myitem',
  standalone: true,
  imports: [],
  templateUrl: './myitem.component.html',
  styleUrl: './myitem.component.css'
})
export class MyitemComponent {
  @Input() message:string = '';
  @Output() messageChange = new EventEmitter<string>();

  updateMessage(newmessage: string): void {
    this.message = newmessage;
    this.messageChange.emit(this.message);
  }

}

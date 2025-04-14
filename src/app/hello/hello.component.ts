import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, AbstractControl, FormControlOptions } from '@angular/forms';

function AlphaValidator(control: AbstractControl) {
  const REGPATTERN = /^[a-zA-Z]+$/;
  if (REGPATTERN.test(control.value)){
    return null;
  } else {
    return {alpha:{valid: false }};
  };
}

function EvenValidator(control: AbstractControl) {
  return control.value % 2 == 0 ? null : {even:{valid:false}};
}
@Component ({
  selector: 'app-hello',
  standalone: true,
  imports:[ReactiveFormsModule],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css',
})

export class HelloComponent implements OnInit {
  title = 'hello-app';
  message = 'メッセージ';
  name = new FormControl('', [Validators.required,AlphaValidator]);
  email = new FormControl('', Validators.email);
  age = new FormControl(0,[Validators.min(0),Validators.max(150),EvenValidator]);
  myForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age
  });
  
  onSubmit() {
    console.log(this.age.errors);
    if (this.myForm.invalid) {
      this.message = 'VALIDATION ERROR.';
    } else {
      let result = this.myForm.value;
      this.message = JSON.stringify(result,null,2);
    }
  }
  ngOnInit() { } 
}

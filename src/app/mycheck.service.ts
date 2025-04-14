import { Injectable } from '@angular/core';

interface Person {
  name:string;
  email:string;
}

@Injectable({
  providedIn: 'root'
})

export class MydataService {
  data:Person[] = [
  {name:"taro", email:"taro@yamada"},
  {name:"hanako", email:"hanako@flower"},
  {name:"sachiko", email:"sachiko@happy"},
  {name:"ichiro", email:"ichiro@baseball"},
  ];
  
  constructor() { }

  get(name:string) {
    const res = this.data.find(x => x.name == name.toLowerCase());
    return res ? res.email : {name:"名前が見つかりません", email:"-"};
  }
}

@Injectable({
  providedIn: 'root'
})
export class MycheckService {
  name:string = '';
  data:Person[] = [
    {name:"taro", email:"taro@yamada"},
    {name:"hanako", email:"hanako@flower"},
    {name:"sachiko", email:"sachiko@happy"},
    {name:"ichiro", email:"ichiro@baseball"},
  ];

  constructor( ) { }

  hello(name:string) {
    this.name = name;
    return "Hello, " + this.name + "!!";
  }

  push(item:Person) {
    this.data.push(item);
  }
  pop() {
    return this.data.pop();
  }
  get(n:number){
    return this.data[n];
  }
  getByName(name:string) {
    const res = this.data.find(x => x.name == name.toLowerCase());
    return res ? res : {name:"名前が見つかりません", email:"_"};
  }
  getPerson() {
    return JSON.stringify(this.getByName(this.name));
  }
  size() {
    return this.data.length;
  }
  json() {
    return JSON.stringify(this.data, null, 2);
  }
}

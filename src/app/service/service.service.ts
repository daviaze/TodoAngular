import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private storage: Storage;
  private todos: any[];

  constructor() {
    this.storage = window.localStorage;
    this.todos = [];
   }

set(key: string, value: any){
  this.todos.push(this.get("todo"));
  this.todos.push(value);
  let tds = this.todos;
  this.storage.setItem(key, tds.toString())
  console.log(this.todos);
}

get(key: string){
  if (this.storage) {
    return this.storage.getItem(key);
  }
  return null;
}

getAll(){
  let qtd =  this.storage.getItem.length - 1;
}

}

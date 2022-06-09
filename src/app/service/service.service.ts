import { Todo } from './../todo';
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
  let td = this.get("todo");
  console.log(td);

  this.todos.push(value);

  let tds = this.todos;

  this.storage.setItem(key, tds.toString())
  console.log(this.todos);
}

get(key: string): any{
  if (this.storage) {
    return this.storage.getItem(key);
  }
  return null;
}
}

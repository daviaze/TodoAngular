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

  this.storage.setItem(key, value)
}

get(key: string): any{
  if (this.storage) {
    return this.storage.getItem(key);
  }
  return null;
}
}

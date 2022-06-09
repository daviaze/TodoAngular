import { Todo } from './../todo';
import { ServiceService } from './../service/service.service';
import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  mensagem : string = "";
  todos?: string[] | null;
  all : string = "";

  constructor(private servico : ServiceService) {

    this.todos = [];

  }

  cadastrar(){

    this.all = this.servico.get("todo");
    let todos = this.all.split(",");
    this.todos = todos;
    this.todos.push(this.mensagem);
    console.log(this.todos);
    this.servico.set("todo", this.mensagem);

    this.ngOnInit();
  }


  ngOnInit(): void {
    //[{mensagem: "teste", prioridade: "primaria"}]
    this.all = this.servico.get("todo");
    if (this.all.length > 0){
    let todos = this.all.split(",");
    this.todos = todos;
    }
  }
}

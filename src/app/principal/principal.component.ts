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
  prioridade : string = "";
  todos?: Todo[];
  id: number;
  todo : Todo;

  constructor(private servico : ServiceService) {
    this.id = 0;
    this.todos = [];
    this.todo = new Todo();
  }

  cadastrar(){
    this.id+=1;
    this.todo = new Todo(this.mensagem, this.prioridade);
    this.servico.set("todo", this.todo);
  }


  ngOnInit(): void {
    //[{mensagem: "teste", prioridade: "primaria"}]

      console.log(this.servico.get("523f53e9-68c4-b10e-7228-97a8b43a5ff3"));
  }

}

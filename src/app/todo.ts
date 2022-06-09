export class Todo {
  mensagem : string | undefined;
  id : string | undefined

  constructor(todo? : string, id?: string){
    this.mensagem = todo;
    this.id = id;
  }

}

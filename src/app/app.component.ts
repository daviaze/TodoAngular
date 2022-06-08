import { ServiceService } from './service/service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  todo: string = "";
  servico : ServiceService;

  constructor(sto: ServiceService){
    this.servico = sto;
  }

}

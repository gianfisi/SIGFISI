import { Component, OnInit } from '@angular/core';

import { EventosService } from '../../services/eventos.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  eventos: any = [];

  constructor(private eventosService: EventosService) { }

  ngOnInit() {
    this.getEventos();
  }

  getEventos() {
    this.eventosService.getEventos().subscribe(
      res => {
        this.eventos = res,
        console.log(res);
      },
      err => console.log(err)
    );
  }

}

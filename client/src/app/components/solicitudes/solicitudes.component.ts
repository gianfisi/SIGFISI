import { Component, OnInit } from '@angular/core';

import { EventosService } from '../../services/eventos.service';


@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {

  eventos: any = [];

  constructor(private eventosService: EventosService) { }

  ngOnInit() {
    this.getSolicitudes();
  }

  getSolicitudes() {
    this.eventosService.getSolicitudes().subscribe(
      res => {
        this.eventos = res,
        console.log(res);
      },
      err => console.log(err)
    );
  }

  aprobarEvento(id: string) {

    if (id) {
      this.eventosService.aprobarEvento(id).subscribe(
        res => {
          console.log(res);
          this.eventos = res;
          this.getSolicitudes();
        },
        err => console.log(err)
      );
    }
  }

  desaprobarEvento(id: string) {

    if (id) {
      this.eventosService.desaprobarEvento(id).subscribe(
        res => {
          console.log(res);
          this.eventos = res;
          this.getSolicitudes();
        },
        err => console.log(err)
      );
    }
  }
}

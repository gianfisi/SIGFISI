import { Component, OnInit, HostBinding } from '@angular/core';
import { Evento } from '../../models/Evento';
import { ActivatedRoute, Router} from '@angular/router';
import { EventosService } from '../../services/eventos.service';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  // @HostBinding('class') classes = 'row';

  // evento: Evento = {
  //   id: 0,
  //   titulo: '',
  //   descripcion: '',
  //   image: '',
  //   created_at: new Date()
  // };

  eventos: any = [];

  constructor(private eventosService: EventosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.eventosService.getEvento(params.id).subscribe(
        res => {
          console.log(res);
          this.eventos = res;
        },
        err => console.log(err)
      );
    }
  }

}

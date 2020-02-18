import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../services/eventos.service';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  variable = 0;
  constructor(private eventosService: EventosService, private router: Router, private activatedRoute: ActivatedRoute) { }
  evento: any = [];
  ngOnInit() {
  }

  limpiar() {
    this.variable = 0;
  }

  buscarTitulo(titulo: string) {

    if (titulo) {
      this.eventosService.getTitulo(titulo).subscribe(
        res => {
          console.log(res);
          this.evento = res;
        },
        err => console.log(err)
      );
    }
  }
}


import { Component, OnInit, HostBinding } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Evento } from '../../models/Evento';
import { Route , Router } from '@angular/router';
import { EventosService } from '../../services/eventos.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  // signupForm: FormGroup;
  // ngOnInit() {
  // }

  // tslint:disable-next-line: variable-name
  // constructor(private builder: FormBuilder) {
  //   this.signupForm = this.builder.group({
  //     nombre: ['', Validators.required]

  //   });
  // }
  evento: Evento = {
    id_evento: 0,
    titulo: '',
    descripcion: '',
    imagen: '',
    categoria: '',
    id_aula: 0,
    id_conferencia: 0,
    id_solicitud: 0,
    create_at: new Date()
  };

  contacto: FormGroup;
  submitted = false;
  title = 'CREAR EVENTOS ';
  constructor(private eventosService: EventosService, private formBuilder: FormBuilder, private router: Router) { }

   ngOnInit() {
       this.contacto = this.formBuilder.group({
             titulo: ['', Validators.required],
             descripcion: ['', [Validators.required]],
             imagen: ['', [Validators.required]],
             categoria: ['', [Validators.required]],
             nom_expositor: ['', Validators.required],
             ape_expositor: ['', Validators.required],
             id_aula: ['', Validators.required],
             id_conferencia: ['', [Validators.required]],
             id_solicitud: ['', [Validators.required]]
       });
   }

   get f() { return this.contacto.controls; }

  //  enviar(values) {
  //   this.submitted = true;

  //   if (this.contacto.invalid) {
  //       return;
  //   }
  //   console.log(values);
  //  }

  guardarEvento() {
    delete this.evento.create_at;
    delete this.evento.id_evento;
    this.submitted = true;
    this.eventosService.saveEventos(this.evento).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/eventos']);
      },
      err => console.error(err)
    );
  }
}

import { Component, OnInit, HostBinding } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../../models/Usuario';
import { Route , Router } from '@angular/router';
import { EventosService } from '../../services/eventos.service';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  usuario: Usuario = {
    id_usuario: 0,
    nombres: '',
    apellidos: '',
    dni: 0,
    celular: 0,
    distrito: '',
    direccion: '',
    correo: '',
    contrasena: '',
    create_at: new Date(),
    fecha_de_nacimiento: new Date()
  };

  contacto2: FormGroup;
  submitted = false;

  constructor(private eventosService: EventosService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.contacto2 = this.formBuilder.group({
        nya: ['', Validators.required],
        dni: ['', [Validators.required]],
        correo: ['', [Validators.required]],
        fecha: ['', [Validators.required]],
        distrito: ['', Validators.required],
        contrasena: ['', Validators.required],
        celular: ['', Validators.required],
        direccion: ['', Validators.required]
    });
}

get f() { return this.contacto2.controls; }

//  enviar(values) {
//   this.submitted = true;

//   if (this.contacto.invalid) {
//       return;
//   }
//   console.log(values);
//  }

guardarUsuario() {
delete this.usuario.create_at;
delete this.usuario.id_usuario;
this.submitted = true;
this.eventosService.saveUsuarios(this.usuario).subscribe(
  res => {
     console.log(res);
     this.router.navigate(['/eventos']);
   },
   err => console.error(err)
 );
}
}

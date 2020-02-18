import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { ComprarComponent } from './components/comprar/comprar.component';
import { CrearComponent } from './components/crear/crear.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { TeamComponent } from './components/team/team.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/eventos',
    pathMatch: 'full'
  },
  {
    path: 'eventos',
    component: PrincipalComponent
  },
  {
    path: 'eventos/:id',
    component: ComprarComponent
  },
  {
    path: 'crearEvento',
    component: CrearComponent
  },
  {
    path: 'registrar',
    component: RegistrarComponent
  },
  {
    path: 'solicitudes',
    component: SolicitudesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

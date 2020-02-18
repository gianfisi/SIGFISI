import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evento } from '../models/Evento';
import { Usuario } from '../models/Usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

    getEventos() {
      return this.http.get(`${this.API_URI}/eventos`);
    }

    getEvento(id: string) {
      return this.http.get(`${this.API_URI}/eventos/${id}`);
    }

    getSolicitudes() {
      return this.http.get(`${this.API_URI}/eventos/solicitudes`);
    }

    getTitulo(titulo: string) {
      return this.http.get(`${this.API_URI}/eventos/filtro/${titulo}`);
    }
    // getTitulo(evento: Evento) {
    //   return this.http.get(`${this.API_URI}/eventos/filtro/`,evento);
    // }

    aprobarEvento(id: string) {
      return this.http.put(`${this.API_URI}/eventos/aprobar/${id}`, null);
    }

    desaprobarEvento(id: string) {
      return this.http.put(`${this.API_URI}/eventos/desaprobar/${id}`, null);
    }

    deleteEvento(id: string) {
      return this.http.delete(`${this.API_URI}/eventos/${id}`);
    }

    saveEventos(evento: Evento) {
      return this.http.post(`${this.API_URI}/eventos`, evento);
    }

    saveUsuarios(usuario: Usuario) {
      return this.http.post(`${this.API_URI}/usuarios`, usuario);
    }

    updateEventos(id: string, updateEvento: Evento): Observable<Evento> {
      return this.http.post(`${this.API_URI}/eventos/${id}`, updateEvento);
    }
}

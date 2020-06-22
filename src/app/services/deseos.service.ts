import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root',
})
export class DeseosService {
  listas: Lista[] = [];

  constructor() {
    this.obtenerStorage();

    /* LISTA DE EJEMPLO PERO YA ESTOY UTILIZANDO EL LOCALSTORAGE */
    /* const lista1 = new Lista('Recolectar Piedras Del Infinito');
    const lista2 = new Lista('Héroes A Desaparecer');
    this.listas.push(lista1, lista2); */
  }

  crearLista(titulo: string) {
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();
  }

  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  obtenerStorage() {
    if (localStorage.getItem('data')) {
      this.listas = JSON.parse(localStorage.getItem('data'));
    } else {
      this.listas = [];
    }
  }
}

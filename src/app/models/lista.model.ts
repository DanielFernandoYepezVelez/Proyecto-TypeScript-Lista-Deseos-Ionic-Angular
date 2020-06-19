import { ListaItem } from './lista-item.model';

export class Lista {
  id: number;
  titulo: string;
  estado: boolean;
  items: ListaItem[];
  creadaEn: Date;
  terminadaEn: Date;

  constructor(titulo: string) {
    this.id = new Date().getTime();
    this.titulo = titulo;
    this.estado = false;
    this.items = [];
    this.creadaEn = new Date();
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { DeseosService } from '../../services/deseos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(
    public deseoService: DeseosService,
    private router: Router,
    private alertController: AlertController
  ) {}

  async agregarLista() {
    // this.router.navigateByUrl('/tabs/tab1/agregar');

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Nueva Lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre De La Lista',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          },
        },
        {
          text: 'Crear',
          handler: (data) => {
            if (data.titulo.length === 0) {
              return;
            }

            /* Tengo Que Crear La Lista */
            this.deseoService.crearLista(data.titulo);
          },
        },
      ],
    });

    await alert.present();
  }
}

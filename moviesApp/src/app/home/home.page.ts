import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IonAlert, IonButton } from '@ionic/angular';
import type { OverlayEventDetail } from '@ionic/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  
  constructor(private toastController: ToastController) { }
  async presentToast(position: 'bottom') {
             const toast = await this.toastController.create({
            message: 'Você adicionou o filme aos favoritos',
            duration: 1500,
            position: position,
            color: "success",
            cssClass: 'custom-toast'
          });

          await toast.present();
        }


  public alertButtons = [
    {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
        this.presentToast('bottom');
      },
    },
  ];

  setResult(event: CustomEvent<OverlayEventDetail>) {
    console.log(`Dismissed with role: ${event.detail.role}`);
  }

}


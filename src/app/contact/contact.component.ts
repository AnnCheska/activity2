import { Component} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.scss']
})
export class  ContactComponent {

  contactlist  = [
    {id: 1, name: 'Valdemor Movido', email: 'valmovido@gmail.com'  ,number: '09278405678'},
    {id: 2, name: 'Nifled Cumbis', email: 'Nifledcumbis@gmail.com'  ,number: '09451680835'},
    {id: 2, name: 'Rizza Leah Mendoza', email: 'RizzaLeahMendoza@gmail.com'  ,number: '09153427288'},
   
  ]
  constructor(public alertController: AlertController,public router: Router) {
  }
  redirectTo() {
    this.router.navigateByUrl('/mailpage');
  }
  async  confirmation(index: number) {
    const alert = await this.alertController.create({
      header: 'Delete?',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
              this.contactlist.splice(index, 1);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', 
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ],
    });

    await alert.present();
  }
  async addUser() {
    let prompt = await this.alertController.create({
      header: 'Add Contact',
      inputs: [
        {
          name: 'name',
          placeholder: 'name',
        },{
          name: 'email',
          placeholder: 'email'
        },
        {
          name: 'number',
          placeholder: 'number'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: (data) => {
            console.log('Saved clicked');
            
          this.contactlist.push({
            id: data.id,
            name: data.name,
            email: data.email,
            number: data.number
          });
     
          }
        }
      ]
    });
    await prompt.present();

  }


}
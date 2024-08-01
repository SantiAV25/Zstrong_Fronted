import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-create-mesociclo',
  templateUrl: './create-mesociclo.page.html',
  styleUrls: ['./create-mesociclo.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CreateMesocicloPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

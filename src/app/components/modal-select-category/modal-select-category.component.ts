import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-modal-select-category',
  templateUrl: './modal-select-category.component.html',
  styleUrls: ['./modal-select-category.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class ModalSelectCategoryComponent {

  @Input() categories: Category[] = [];

  constructor(private modalCtrl: ModalController) {}

  select(categoryId: number | null) {
    this.modalCtrl.dismiss(categoryId);
  }

  close() {
    this.modalCtrl.dismiss(undefined, 'cancel');
  }

}

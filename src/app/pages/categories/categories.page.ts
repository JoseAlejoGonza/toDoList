import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CategoriesPage implements OnInit {

  categories: Category[] = [];
  newCategory = '';
  editingCategory: Category | null = null;

  constructor(
    private categoryService: CategoryService,
    private alertController: AlertController,
    private router: Router,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.categories = this.categoryService.getCategories();
  }

  addCategory() {
    if (!this.newCategory.trim()) return;

    const newCat: Category = {
      id: Date.now(),
      name: this.newCategory,
    };
    this.categoryService.addCategory(newCat);
    this.newCategory = '';
    this.loadCategories();
  }

  editCategory(cat: Category) {
    this.editingCategory = { ...cat };
  }

  saveEdit() {
    if (this.editingCategory) {
      this.categoryService.updateCategory(this.editingCategory);
      this.editingCategory = null;
      this.loadCategories();
    }
  }

  cancelEdit() {
    this.editingCategory = null;
  }

  async confirmDelete(category: Category) {
    const alert = await this.alertController.create({
      header: '¿Eliminar categoría?',
      message: `¿Estás seguro de eliminar la categoría ${category.name}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            this.taskService.deleteTasksByCategoryId(category.id);
            this.categoryService.deleteCategory(category.id);
            this.loadCategories();
          }
        }
      ]
    });

    await alert.present();
  }

  goToTasks(){
    this.router.navigate(['/']);
  }
}

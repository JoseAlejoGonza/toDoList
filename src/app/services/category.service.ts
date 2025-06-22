import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categories: Category[] = [];

  constructor() {
    const saved = localStorage.getItem('categories');
    this.categories = saved ? JSON.parse(saved) : [];
  }

  getCategories(): Category[] {
    return this.categories;
  }

  addCategory(cat: Category) {
    this.categories.push(cat);
    this.save();
  }

  updateCategory(updated: Category) {
    const idx = this.categories.findIndex(c => c.id === updated.id);
    if (idx > -1) {
      this.categories[idx] = updated;
      this.save();
    }
  }

  deleteCategory(id: number) {
    this.categories = this.categories.filter(c => c.id !== id);
    this.save();
  }

  private save() {
    localStorage.setItem('categories', JSON.stringify(this.categories));
  }
}

import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [];

  constructor() {
    const saved = localStorage.getItem('tasks');
    this.tasks = saved ? JSON.parse(saved) : [];
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
    this.save();
  }

  updateTask(updated: Task) {
    const idx = this.tasks.findIndex(t => t.id === updated.id);
    if (idx > -1) {
      this.tasks[idx] = updated;
      this.save();
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.save();
  }
  
  deleteTasksByCategoryId(categoryId: number) {
    this.tasks = this.tasks.filter(t => t.categoryId !== categoryId);
    this.save();
  }
  
  private save() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

}

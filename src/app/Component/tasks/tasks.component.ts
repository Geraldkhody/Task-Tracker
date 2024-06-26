import { Component } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = TASKS;

  filteredTask: Task[] =  this.tasks;

  onDeleteClick(id: number) {
    this.filteredTask = this.filteredTask.filter(task => task.id !== id)
  }

}

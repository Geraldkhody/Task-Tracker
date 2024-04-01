import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task : Task = {} as Task;
  @Input() className!: string;

  @Output() delete = new EventEmitter();

  isReminder: boolean = false;

  constructor(){  }

  reminderHandler() {
    this.isReminder = !this.isReminder;

  }

  onDeleteClick(): void {
    this.delete.emit(this.task.id);
  }

}

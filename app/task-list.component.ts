import { Component, EventEmitter } from 'angular2/core';
import { TaskComponent } from './task.component';
import { Task } from './task.model';
import {EditTaskDetailsComponent} from './edit-task-details.component';
import { NewTaskComponent } from './new-task.component';

@Component({
  selector: 'task-list',
  inputs: ['taskList'],
  outputs: ['onTaskSelect'],
  directives: [TaskComponent, EditTaskDetailsComponent, NewTaskComponent],
  template: `
  <task-display *ngFor="#currentTask of taskList"
    (click)="taskClicked(currentTask)"
    [class.selected]="currentTask === selectedTask"
    [task]="currentTask">
  </task-display>
  <edit-task-details *ngIf="selectedTask" [task]="selectedTask">
  </edit-task-details>
  <new-task (onSubmitNewTask)="createTask($event)"></new-task>
  `
})

export class TaskListComponent {
  public taskList: Task[];
  public onTaskSelect: EventEmitter<Task>;
  public selectedTask: Task;
  constructor() {
    this.onTaskSelect = new EventEmitter();
  }
  taskClicked(clickedTask: Task): void {
    console.log('child', clickedTask);
    this.selectedTask = clickedTask;
    this.onTaskSelect.emit(clickedTask);
  }
  createTask(description: string): void {
  this.taskList.push(
    new Task(description, this.taskList.length)
  );
  }
}

import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{


    taskObj: Task  = new Task();
    taskArr: Task[] = [];
    addTaskValue: string = "";
    updateTaskValue : string= '';

    constructor( private _taskService: TaskService){}


  ngOnInit(): void {
    this.updateTaskValue= '';
    this.addTaskValue = '';
    this.taskObj = new Task();
    this.taskArr = [];
  }

  newTask(){
    this.taskObj.description= this.addTaskValue;
    this.taskObj.state = "Pendiente";
    this._taskService.newTask(this.taskObj).subscribe((resp) => { 
      this.ngOnInit();
      this.addTaskValue='';
      this.taskObj.state = '';
    }, error =>{
      alert('error')
    })
  }


    call(task: Task){
      this.taskObj = task;
    }
  }
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private serviceURL = 'http://localhost:3000/tasks';
  constructor(
    private http: HttpClient
  ) { }

  private generateId(): number {
    return new Date().getTime(); 
  }

  newTask(task: Task): Observable<any>{
    task.id = this.generateId().toString();
    return this.http.post(this.serviceURL, task)
  }
  
  getAllTask(): Observable<Task[]>{
    return this.http.get<Task[]>(this.serviceURL)
  }
  
  deleteTask(task: Task): Observable<any>{
    return this.http.delete(`${this.serviceURL}/${task.id}`)
  }

  updateTask(task: Task): Observable<any>{
    console.log(`${this.serviceURL}/${+task.id}`)
    return this.http.put<Task>(`${this.serviceURL}/${task.id}`, task)
  }

}

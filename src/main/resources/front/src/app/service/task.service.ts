import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import { Observable } from 'rxjs';
import { endpoint, endpointTask } from '../endpoint';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  getTasks() {
    throw new Error('Method not implemented.');
  }
  taskObj: Task = new Task();
  private serviceURL = `${endpointTask}task`;
  constructor(
    private http: HttpClient
  ) { }

  private generateId(): number {
    return new Date().getTime();
  }

  newTask(task: Task): Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `${token}`);
    return this.http.post(this.serviceURL, task, {headers})
  }

  getAllTask(): Observable<Task[]>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `${token}`);
    return this.http.get<Task[]>(this.serviceURL,{headers})
  }

  deleteTask(task: Task): Observable<any>{
    return this.http.delete(`${this.serviceURL}/${task.id}`)
  }
  call(task: Task) {
    this.taskObj = { ...task }; // Copia la tarea seleccionada
    //taskObj
  }

  updateTask(task: Task): Observable<any>{
    console.log(`${this.serviceURL}/${+task.id}`)
    const token = localStorage.getItem('token');
    console.log('Tarea actualizada:', this.taskObj);
   // state: this.selectedState,
    const headers = new HttpHeaders().set('Authorization', `${token}`);

    return this.http.put(`${this.serviceURL}/update`, task,  {headers})
  }
 
}
/*   updateTask(task: Task): Observable<any>{
    console.log(`${this.serviceURL}/update`)
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `${token}`);
    return this.http.put(`${this.serviceURL}/update`, task, {headers})
  } */
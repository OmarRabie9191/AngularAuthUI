import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }
  
  deleteUser(id:number){
    return this.http.delete<any>(`${environment.baseUrl+'api/User/'}${id}`)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "https://localhost:44346/api/users";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<ListResponseModel<User>> {
    let fullpath = this.apiUrl + "/getuserdetails"
    return this.http.get<ListResponseModel<User>>(fullpath);
  }

  getUserById(id:number):Observable<SingleResponseModel<User>> {
    let fullPath = this.apiUrl + "/getsingleuserdetail?id=" + id;
    return this.http.get<SingleResponseModel<User>>(fullPath);
  }

}

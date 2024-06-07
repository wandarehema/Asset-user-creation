import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];
  private nextId = 1;
  // private  userDataUrl = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
  

  // constructor(private http:HttpClient) { }

  // addUser(user: User) {
  //   user.id = this.nextId++;
  //   this.users.push(user);
  // }

  // getUsers(): User[] {
  //   return this.users;
  // }
  // getUserdata():Observable<any[]> {
  //   return this.http.get<any[]>(this.userDataUrl);
  // }
}
import { HttpClient } from '@angular/common/http';
import { User } from '../models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private readonly http: HttpClient) {}

  getUser(): Observable<User> {
    return this.http.get<User>('api/user');
  }
}

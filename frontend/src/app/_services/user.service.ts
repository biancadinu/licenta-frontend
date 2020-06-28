import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';


@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(``);
    }

    getUserDetails(): Observable<User[]> {
        return this.http.get<User[]>('http://localhost:8000/curent-user/');
    }
    
    addIronIntake(iron): Observable<any> {
        return this.http.patch<any>(`http://localhost:8000/users/`, {iron_intake: iron})
    }
}
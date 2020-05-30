import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../model/user.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(``);
    }

    addIronIntake(iron): Observable<any> {
        return this.http.patch<any>(`http://localhost:8000/users/`, {iron_intake: iron})
    }
}
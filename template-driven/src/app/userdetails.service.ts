import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }
  public showDetails(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
  public postDetails(user: any[]): Observable<any[]> {
    return this.http.post<any[]>(this.url, user);
  }

}

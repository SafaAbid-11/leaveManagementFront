import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Collaborateur } from 'src/app/entities/collaborateur';


@Injectable({
  providedIn: 'root'
})
export class CollaboratorService {

  private baseURL="http://localhost:8090/api/collaborators";
  constructor(private httpClient:HttpClient) { }

   getColl(): Observable<any> {
    return this.httpClient.get(`${this.baseURL}`);
  }

  getCollById(id:number): Observable<Collaborateur> {
    return this.httpClient.get<Collaborateur>(`${this.baseURL}/${id}`);
   }
   
}

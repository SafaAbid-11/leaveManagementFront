import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  Request} from '../../../../entities/request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private baseURL="http://localhost:8090/api/leaveRequests";

  constructor(private httpClient:HttpClient) { }

   getdata(): Observable<any> {
    return this.httpClient.get(`${this.baseURL}`);
  }
   createRequest(request :Request): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`,request);
   }

   /* getRequestsList(): Observable<Request[]> {
    return this.httpClient.get<Request[]>(`${this.baseURL}`);
   } */
 
}

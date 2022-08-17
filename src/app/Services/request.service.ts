import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  Request} from '../entities/request';

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
   updateRequestStatus(id:number, status:string) : Observable<any> {
    return this.httpClient.put(`${this.baseURL}/${id}/${status}`,{});
   }
}

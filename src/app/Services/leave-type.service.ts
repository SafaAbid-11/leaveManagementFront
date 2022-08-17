import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaveType } from 'src/app/entities/leave-type';
@Injectable({
  providedIn: 'root'
})
export class LeaveTypeService {

  private baseURL="http://localhost:8090/api/leaveTypes";
  private baseURL1="http://localhost:8090/api/ltype";
  
  constructor(private httpClient:HttpClient) { }

  getType(): Observable<LeaveType[]> {
    return this.httpClient.get<LeaveType[]>(`${this.baseURL}`);
   }
   getLeaveTypeById(id:number): Observable<LeaveType> {
    return this.httpClient.get<LeaveType>(`${this.baseURL}/${id}`);
   }
   getLeaveTypeByTitle(leaveTitle:string): Observable<LeaveType> {
    return this.httpClient.get<LeaveType>(`${this.baseURL1}/${leaveTitle}`);
   }
}

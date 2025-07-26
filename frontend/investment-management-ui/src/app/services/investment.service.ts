import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Investment } from '../models/Investment.models';
import { Observable } from 'rxjs';

interface AddInvestmentResponse {
  investmentId: number;
}

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  constructor(private http:HttpClient) { }
  private url:String= 'http://localhost:5222';

  addInvestment(inv:Investment):Observable<AddInvestmentResponse>{
    return this.http.post<AddInvestmentResponse>(`${this.url}/addInvestment`, inv);
  }

  getAllInvestments():Observable<Investment[]>{
    return this.http.get<Investment[]>(`${this.url}/getAllInvestment`);
  }

  getInvestmentById(id:number):Observable<Investment>{
    return this.http.get<Investment>(`${this.url}/getInvestment?id=${id}`);
  }

  updateInvestment(inv:Investment):Observable<Investment>{
    return this.http.put<Investment>(`${this.url}/updateInvestment`, inv);
  }

  deleteInvestmentBtId(id:number):Observable<void>{
    return this.http.delete<void>(`${this.url}/deleteInvestment?id=${id}`);
  }
}

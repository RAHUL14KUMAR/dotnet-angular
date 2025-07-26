import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Investment } from '../models/Investment.models';
import { InvestmentService } from '../services/investment.service';

@Component({
  selector: 'app-investment-list',
  imports: [CommonModule,RouterLink],
  templateUrl: './investment-list.component.html',
  styleUrl: './investment-list.component.css'
})
export class InvestmentListComponent implements OnInit {
  investments: Investment[] = [];

  constructor(private invService:InvestmentService){}

  ngOnInit(): void {
      this.listInvestments();
  }
  listInvestments(): void{
     this.invService.getAllInvestments().subscribe((data:any)=>{
      console.log("Investment data fetched successfully",data);
      this.investments=data;
     })
  }

  deleteInvestment(id:number): void{
    this.invService.deleteInvestmentBtId(id).subscribe(()=>{
      alert("investment deleted successfully");
      this.listInvestments();
    })
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InvestmentService } from '../services/investment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-investment-create',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './investment-create.component.html',
  styleUrl: './investment-create.component.css'
})
export class InvestmentCreateComponent implements OnInit {
  investmentForm!: FormGroup;

  investmentTypes: string[] = [
    'Mutual Fund',
    'Stocks',
    'Bonds',
    'Real Estate',
    'Fixed Deposit'
  ];

  constructor(private invServ:InvestmentService, private fb:FormBuilder, private router:Router){}

  ngOnInit(): void {
    // Initialization logic can go here
    this.investmentForm=this.fb.group({
      Name:['', Validators.required],
      Type:['',Validators.required],
      Amount:['',Validators.required],
      PurchaseDate:['',Validators.required]
    })
  }

  addInvestment(): void {
    if (this.investmentForm.valid) {
      const investmentData = this.investmentForm.value;
      this.invServ.addInvestment(investmentData).subscribe({
        next: (response) => {
          console.log('Investment added successfully', response);
          alert(`Investment added successfully with ID: ${response.investmentId}`);
          this.router.navigate(['/investments']);
        }
      })
    }
  }
}

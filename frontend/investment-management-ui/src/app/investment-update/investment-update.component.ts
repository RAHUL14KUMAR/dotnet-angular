import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Investment } from '../models/Investment.models';
import { ActivatedRoute, Router } from '@angular/router';
import { InvestmentService } from '../services/investment.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-investment-update',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './investment-update.component.html',
  styleUrl: './investment-update.component.css'
})
export class InvestmentUpdateComponent implements OnInit {
  investmentForm!:FormGroup
  Investment!:Investment
  loading=true
  id!:number

  investmentTypes: string[] = [
    'Mutual Fund',
    'Stocks',
    'Bonds',
    'Real Estate',
    'Fixed Deposit'
  ];

  constructor(private fb:FormBuilder, private invServ:InvestmentService,private router:Router,private route:ActivatedRoute) {}
  ngOnInit(): void {
    // Initialization logic can go here
    this.investmentForm=this.fb.group({
      Name:['', Validators.required],
      Type:['',Validators.required],
      Amount:['',Validators.required],
      PurchaseDate:['',Validators.required]
    })

    this.route.paramMap.pipe(
      switchMap((param)=>{
        this.id=Number(param.get('id'));
        return this.invServ.getInvestmentById(this.id);
      })
    ).subscribe((inv)=>{
      this.Investment=inv;
      this.investmentForm.patchValue({
        Name: this.Investment.name,
        Type: this.Investment.type,
        Amount: this.Investment.amount,
        PurchaseDate: this.Investment.purchaseDate
      });
      this.loading=false;
    })
  }

  submitForm():void{
    if(this.investmentForm.valid){
      const updateInv:Investment=this.investmentForm.value;
      updateInv.id=this.id;
      this.invServ.updateInvestment(updateInv).subscribe({
        next:(res)=>{
          console.log("Investment updated successfully from update", res);
          this.router.navigate(['/investments']);
        }
      });
    }
  }
}

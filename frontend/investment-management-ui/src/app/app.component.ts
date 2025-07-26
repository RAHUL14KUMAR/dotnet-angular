import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InvestmentService } from './services/investment.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[InvestmentService]
})
export class AppComponent {
  title = 'investment-management-ui';
}

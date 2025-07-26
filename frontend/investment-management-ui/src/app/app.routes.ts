import { Routes } from '@angular/router';
import { InvestmentListComponent } from './investment-list/investment-list.component';
import { InvestmentCreateComponent } from './investment-create/investment-create.component';
import { InvestmentUpdateComponent } from './investment-update/investment-update.component';

export const routes: Routes = [
    {path:'', redirectTo:'/investments', pathMatch:'full'},
    {path:'investments',component:InvestmentListComponent},
    {path:"create",component:InvestmentCreateComponent},
    {path:"update-Investment/:id", component:InvestmentUpdateComponent}
];

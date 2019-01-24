import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

import { AuthGuardService } from '../auth/auth-guard.service';
import { ServerResolveService } from '../auth/server-resolve.service';

const routes: Routes = [    
    { 
      path: 'dashbord',
      component: DashboardComponent, 
      canActivate: [AuthGuardService],
      resolve: {server : ServerResolveService}
    }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class StudentRoutingModule { }

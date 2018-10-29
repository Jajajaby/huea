import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ADMIN_ROUTES } from './admin.routes';
// Modulos
import { SharedModule } from '../shared/shared.module';

// Componentes
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ADMIN_ROUTES
  ],
  declarations: [
    AdminComponent,
    DashboardComponent
  ]
})
export class AdminModule { }
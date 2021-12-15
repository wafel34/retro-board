import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { LayoutComponent } from './layout/layout/layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule,
    SidebarModule
  ],
  exports: [
    ButtonModule,
    SidebarModule
  ]
})
export class SharedModule {
}

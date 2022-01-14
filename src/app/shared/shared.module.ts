import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { DataTableComponent } from './data-table/data-table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormButtonsComponent } from './buttons/form-buttons/form-buttons.component';
import { InputTextComponent } from './inputs/horizontal-inputs/input-text/input-text.component';
import { InputEmailComponent } from './inputs/horizontal-inputs/input-email/input-email.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    DataTableComponent,
    FormButtonsComponent,
    InputTextComponent,
    InputEmailComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    DataTableComponent,
    FormButtonsComponent,
    InputTextComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxDatatableModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }

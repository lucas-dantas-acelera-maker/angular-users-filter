import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersFilterComponent } from './users-filter/users-filter.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  declarations: [UserDetailsComponent, UsersFilterComponent],
  imports: [AngularMaterialModule, FormsModule, CommonModule],
  exports: [UserDetailsComponent, UsersFilterComponent],
})
export class ComponentsModule {}

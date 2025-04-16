import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersFilterComponent } from './users-filter/users-filter.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { UsersListComponent } from './users-list/users-list.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    UserDetailsComponent,
    UsersFilterComponent,
    UsersListComponent,
  ],
  imports: [AngularMaterialModule, FormsModule, CommonModule, PipesModule],
  exports: [UserDetailsComponent, UsersFilterComponent, UsersListComponent],
})
export class ComponentsModule {}

import { Component } from '@angular/core';

@Component({
  selector: 'app-users-filter',
  templateUrl: './users-filter.component.html',
  styleUrls: ['./users-filter.component.scss'],
})
export class UsersFilterComponent {
  foods = [{ value: 'Test', viewValue: 'Test' }];
}

import { NgModule } from '@angular/core';
import { PhonePipe } from './phone/phone.pipe';
import { AddressPipe } from './address/address.pipe';
import { StatusPipe } from './status/status.pipe';
import { EmptyValuePipe } from './empty-value/empty-value.pipe';

@NgModule({
  declarations: [PhonePipe, AddressPipe, StatusPipe, EmptyValuePipe],
  exports: [PhonePipe, AddressPipe, StatusPipe, EmptyValuePipe],
})
export class PipesModule {}

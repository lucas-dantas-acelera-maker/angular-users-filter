import { NgModule } from '@angular/core';
import { PhonePipe } from './phone/phone.pipe';
import { AddressPipe } from './address/address.pipe';
import { StatusPipe } from './status/status.pipe';

@NgModule({
  declarations: [PhonePipe, AddressPipe, StatusPipe],
  exports: [PhonePipe, AddressPipe, StatusPipe],
})
export class PipesModule {}

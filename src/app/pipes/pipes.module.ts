import { NgModule } from '@angular/core';
import { PhonePipe } from './phone/phone.pipe';
import { AddressPipe } from './address.pipe';

@NgModule({
  declarations: [PhonePipe, AddressPipe],
  exports: [PhonePipe],
})
export class PipesModule {}

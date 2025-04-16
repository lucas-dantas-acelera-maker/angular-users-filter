import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
})
export class PhonePipe implements PipeTransform {
  transform(phoneNumber: string): string {
    const INVALID_PHONE_NUMBER =
      !phoneNumber || phoneNumber.length < 10 || phoneNumber.length > 11;

    if (INVALID_PHONE_NUMBER) {
      return 'Telefone indisponível ou inválido';
    }

    const DDD = phoneNumber.substring(0, 2);

    const CELLPHONE = phoneNumber.length === 11;

    if (CELLPHONE) {
      const FIRST_PART = phoneNumber.substring(2, 7);
      const LAST_PART = phoneNumber.substring(7);
      return `(${DDD}) ${FIRST_PART}-${LAST_PART}`;
    } else {
      const FIRST_PART = phoneNumber.substring(2, 6);
      const LAST_PART = phoneNumber.substring(6);
      return `(${DDD}) ${FIRST_PART}-${LAST_PART}`;
    }
  }
}

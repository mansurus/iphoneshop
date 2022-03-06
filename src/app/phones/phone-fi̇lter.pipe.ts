import { Pipe, PipeTransform } from '@angular/core';
import { Phone } from './phone';

@Pipe({
  name: 'phoneFilter'
})
export class PhoneFilterPipe implements PipeTransform {

  transform(value: Phone[], filterText?: string): Phone[] {
    filterText = filterText?filterText.toLocaleLowerCase():null

    return filterText?value.filter((p:Phone)=>p.color
    .toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}

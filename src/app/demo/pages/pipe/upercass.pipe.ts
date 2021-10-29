import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upercass'
})
export class UpercassPipe implements PipeTransform {

  transform(value: any) {
    let data = value;
    let res = data.toUpperCase(data)
    return res;
  }

}

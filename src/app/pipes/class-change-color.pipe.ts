import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'classChangeColor'
})
export class ClassChangeColorPipe implements PipeTransform {

  transform(suit: string): 'red' | 'black' {

    if(suit === '♥' || suit === '♦')
      return 'red';

    return 'black';
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'detallesLibro'
})
export class DetallesLibroPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

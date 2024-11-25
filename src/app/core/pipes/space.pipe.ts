import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'space',
  standalone: true,
})
export class SpacePipe implements PipeTransform {
  transform(value: string): string {
    const arr = value.split('.')
    return `${arr[0]}. ${arr[1]}. ${arr[2]}`
  }
}

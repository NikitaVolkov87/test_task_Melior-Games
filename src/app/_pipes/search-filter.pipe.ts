import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter',
  pure: false
})
export class SearchFilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any {
    if (!items || !searchText) {
      return items;
    }
    console.log(items, searchText);
    return items.forEach(item => { return item.indexOf(searchText) === -1 } );
  }
}

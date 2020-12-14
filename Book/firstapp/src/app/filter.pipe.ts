import { Pipe, PipeTransform } from '@angular/core';
import { Books } from './app.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(book:Books[], searchText: string): any[] {
    if(!book) return [];
    if(!searchText) return[];
      return book.filter( it => {
      return it.BookName.includes(searchText);
    });
   }
}
import { Pipe, PipeTransform } from '@angular/core';
import { News } from '../interfaces/News';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: Array<News> | null, term: string): any {
    if (!value) return null;
    if (!term) return value;

    term = term.toLocaleLowerCase();
    return value.filter(v => v.title.toLocaleLowerCase().includes(term));
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {
  //value se refiere al texto ue vamos a truncar
  //Si se supera el WordLimit, el texto sera truncado y le anadiremos ... al principio
  //Supangamos que tenemos una palabra "Hola Mundo" en value

  transform(value: string, wordLimit: number= 40): string {

    if(!value){
      return '';
    }else {
      const words: any = value.split(''); // crer un array ["Hola", " ", "Mundo"]
      if(words.length> wordLimit){
        const truncate= words.slice(0, wordLimit).join(""); // el slice: ["Hola"] el join: Hola
        return "..." + truncate; // o return `... ${truncate}`
      }
      else {
        return value;
      }
    }
    
  }

}

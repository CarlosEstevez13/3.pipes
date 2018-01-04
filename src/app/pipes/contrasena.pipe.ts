import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  
  transform(value: string, estado:boolean=true): any {
    if(estado){
      let temp:string[] = [];
      for(let i=0;i<value.length;i++){
        temp.push('*');
      }
      return temp.join("");
    }else{
      return value;
    }
  }

}

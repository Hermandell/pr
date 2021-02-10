import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  // recibe un arreglo de cualquier cosa
  transform(arreglo: any[], texto:string,columna:string): any[] {


 // si no tiene texto retorna y finaliza dando los resultados
 if(texto=='')
 {
   return arreglo;
 }
// si tiene texto

texto=texto.toLowerCase()

return arreglo.filter(item=>{
  return item[columna].toLowerCase().includes(texto);
});


  }

}

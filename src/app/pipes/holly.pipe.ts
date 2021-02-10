import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'holly'
})
export class HollyPipe implements PipeTransform {

  transform(img: any[]): string {

    //si no viene imagenes ponga esa imagen
if(!img){
  return 'assets/img/holly.png'
}


//si viene un arreglo de la imagenes yo returno

if(img.length>0){

  return img[0].url;
}else{
  return 'assets/img/holly.png'

}



    return null;
  }

}

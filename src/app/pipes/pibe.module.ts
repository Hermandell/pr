import { NgModule } from '@angular/core';
import { FiltroPipe } from './filtro.pipe';
import { HollyPipe } from './holly.pipe';

@NgModule({
  declarations: [FiltroPipe, HollyPipe],
  exports: [FiltroPipe,HollyPipe]

})
export class PibeModule { }

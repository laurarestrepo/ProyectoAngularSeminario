import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './agregar/agregar.component';
import { ListarCandidatosComponent } from './listar-candidatos/listar-candidatos.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AgregarComponent, ListarCandidatosComponent, IndexComponent]
})
export class CandidatoModule { }

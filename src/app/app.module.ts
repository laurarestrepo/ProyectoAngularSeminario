import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './candidato/index/index.component';
import { AgregarComponent} from'./candidato/agregar/agregar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CandidatoModule } from './candidato/candidato.module';
import { MenuComponent } from './menu/menu.component';
import { CurrentOptionComponent } from './current-option/current-option.component';


const appRoutes: Routes =[
   {path: 'candidato/index', component: IndexComponent},
   {path: 'candidato/agregar', component: AgregarComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CurrentOptionComponent
  ],
  imports: [
    BrowserModule,
    CandidatoModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

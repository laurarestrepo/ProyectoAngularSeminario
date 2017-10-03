import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './candidato/index/index.component';
import { AgregarComponent} from'./candidato/agregar/agregar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  
  
  MdAutocompleteModule,
  
  
  MdButtonModule,
  
  
  MdButtonToggleModule,
  
  
  MdCardModule,
  
  
  MdCheckboxModule,
  
  
  MdChipsModule,
  
  
  MdCoreModule,
  
  
  MdDatepickerModule,
  
  
  MdDialogModule,
  
  
  MdExpansionModule,
  
  
  MdGridListModule,
  
  
  MdIconModule,
  
  
  MdInputModule,
  
  
  MdListModule,
  
  
  MdMenuModule,
  
  
  MdNativeDateModule,
  
  
  MdPaginatorModule,
  
  
  MdProgressBarModule,
  
  
  MdProgressSpinnerModule,
  
  
  MdRadioModule,
  
  
  MdRippleModule,
  
  
  MdSelectModule,
  
  
  MdSidenavModule,
  
  
  MdSliderModule,
  
  
  MdSlideToggleModule,
  
  
  MdSnackBarModule,
  
  
  MdSortModule,
  
  
  MdTableModule,
  
  
  MdTabsModule,
  
  
  MdToolbarModule,
  
  
  MdTooltipModule,
  
  } from
  '@angular/material';
import { AppComponent } from './app.component';
import { CandidatoModule } from './candidato/candidato.module';
import { MenuComponent } from './menu/menu.component';
import { CurrentOptionComponent } from './current-option/current-option.component';
import {BrowserAnimationsModule} from
'@angular/platform-browser/animations';

  


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
    BrowserAnimationsModule,
    CandidatoModule,
    RouterModule.forRoot(appRoutes), MdAutocompleteModule,
    
    
    MdButtonModule,
    
    
    MdButtonToggleModule,
    
    
    MdCardModule,
    
    
    MdCheckboxModule,
    
    
    MdChipsModule,
    
    
    MdCoreModule,
    
    
    MdDatepickerModule,
    
    
    MdDialogModule,
    
    
    MdExpansionModule,
    
    
    MdGridListModule,
    
    
    MdIconModule,
    
    
    MdInputModule,
    
    
    MdListModule,
    
    
    MdMenuModule,
    
    
    MdNativeDateModule,
    
    
    MdPaginatorModule,
    
    
    MdProgressBarModule,
    
    
    MdProgressSpinnerModule,
    
    
    MdRadioModule,
    
    
    MdRippleModule,
    
    
    MdSelectModule,
    
    
    MdSidenavModule,
    
    
    MdSliderModule,
    
    
    MdSlideToggleModule,
    
    
    MdSnackBarModule,
    
    
    MdSortModule,
    
    
    MdTableModule,
    
    
    MdTabsModule,
    
    
    MdToolbarModule,
    
    
    MdTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

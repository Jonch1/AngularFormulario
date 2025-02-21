import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormularioListComponent} from './components/formulario-list/formulario-list.component';
import {FormularioDetailsComponent} from './components/formulario-details/formulario-details.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {path: '', redirectTo: 'formulario', pathMatch: 'full'},
  {path: 'formulario/list', component: FormularioListComponent},
  {path: 'formulario/details', component: FormularioDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

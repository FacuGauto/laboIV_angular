import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ControlEntidadComponent } from './control-entidad/control-entidad.component';
import { FormularioComponent } from './formulario/formulario.component';
import { GrillaPaisesComponent } from './grilla-paises/grilla-paises.component';
import { HomeComponent } from './pages/home/home.component';
import { EntidadesComponent } from './pages/entidades/entidades.component';

const routes: Routes = [
  {path: '', component: BienvenidoComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'paises', component: GrillaPaisesComponent},
  {path: 'entidades', component: EntidadesComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

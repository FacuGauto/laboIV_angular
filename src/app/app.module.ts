import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ControlEntidadComponent } from './control-entidad/control-entidad.component';
import { ListadoEntidadComponent } from './listado-entidad/listado-entidad.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GrillaPaisesComponent } from './grilla-paises/grilla-paises.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { DetallePaisComponent } from './detalle-pais/detalle-pais.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { EntidadesComponent } from './pages/entidades/entidades.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    BienvenidoComponent,
    LoginComponent,
    ErrorComponent,
    ControlEntidadComponent,
    ListadoEntidadComponent,
    GrillaPaisesComponent,
    HomeComponent,
    DetallePaisComponent,
    EntidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, //firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

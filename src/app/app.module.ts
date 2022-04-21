import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { FooterComponent } from './componentes/estaticos/footer/footer.component';
import { NavbarComponent } from './componentes/estaticos/navbar/navbar.component';
import { LogoComponent } from './componentes/estaticos/logo/logo.component';
import { LocalesComponent } from './componentes/locales/locales.component';
import { LocalComponent } from './componentes/estaticos/local/local.component';
import { LoadingComponent } from './componentes/estaticos/utilidades/loading/loading.component';
import { CarruselComponent } from './componentes/estaticos/utilidades/carrusel/carrusel.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { InicioSesionComponent } from './componentes/estaticos/inicio-sesion/inicio-sesion.component';
import { InicioComponent } from './componentes/estaticos/inicio-sesion/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    LogoComponent,
    LocalesComponent,
    LocalComponent,
    LoadingComponent,
    CarruselComponent,
  
    InicioSesionComponent,
    InicioComponent, 
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
     BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatInputModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

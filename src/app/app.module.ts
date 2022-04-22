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
import { InicioComponent } from './componentes/estaticos/inicio/inicio.component';
import { GoogleMapsComponent } from './componentes/estaticos/utilidades/google-maps/google-maps.component';
MatButtonModule
import {MatSliderModule} from '@angular/material/slider';

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
    InicioComponent,
    GoogleMapsComponent,
    

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
     BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatInputModule, 
    ReactiveFormsModule, 
    MatButtonModule, 
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

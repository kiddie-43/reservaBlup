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
import { LoadingComponent } from './componentes/utilidades/loading/loading.component';
import { CarruselComponent } from './componentes/utilidades/carrusel/carrusel.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './componentes/usuario-crud/inicio/inicio.component';
import { GoogleMapsComponent } from './componentes/estaticos/utilidades/google-maps/google-maps.component';

import { MatSliderModule } from '@angular/material/slider';
import { PuntuacionComponent } from './componentes/utilidades/puntuacion/puntuacion.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TabComponent } from './componentes/utilidades/tab/tab.component';
import { MatIconModule } from '@angular/material/icon';
import { ComentariosComponent } from './componentes/comentarios/comentarios.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MensageComponent } from './componentes/estaticos/utilidades/mensage/mensage.component';
import { TarjetaComentarioComponent } from './componentes/comentarios/tarjeta-comentario/tarjeta-comentario.component';
import { RegistrarUsuarioComponent } from './componentes/usuario-crud/registrar-usuario/registrar-usuario.component';
import { PerfilUsuarioComponent } from './componentes/perfiles/perfil-usuario/perfil-usuario.component';
import { PerfilesComponent } from './componentes/perfiles/perfiles.component';
import { LocalPerfilComponent } from './componentes/perfiles/local-perfil/local-perfil.component';
import { TabPerfilComponent } from './componentes/utilidades/tab-perfil/tab-perfil.component';
import { LocalComponent } from './componentes/local/local.component';
import { ComentariosFormComponent } from './componentes/formularios/comentarios-form/comentarios-form.component';
import { ReservasCardComponent } from './componentes/reservas/reservas-card/reservas-card.component';
import { ReservasComponent } from './componentes/reservas/reservas.component';
import { ReservasUsuarioComponent } from './componentes/reservas/reservas-usuario/reservas-usuario.component';
import { ReservasLocalComponent } from './componentes/reservas/reservas-local/reservas-local.component';
import { ReservaFormComponent } from './componentes/formularios/reservas/reserva-form/reserva-form.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';

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
    PuntuacionComponent,
    TabComponent,
    ComentariosComponent,
    MensageComponent,
    TarjetaComentarioComponent,
    RegistrarUsuarioComponent,
    PerfilUsuarioComponent,
    PerfilesComponent,
    TabPerfilComponent,
    ComentariosFormComponent,
    LocalPerfilComponent,
    ReservasCardComponent,
    ReservasComponent,
    ReservasUsuarioComponent,
    ReservasLocalComponent,
    ReservaFormComponent




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
    MatSliderModule,
    MatTabsModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatDialogModule, 
    MatStepperModule, 
    MatDatepickerModule, 
  MatSelectModule, 
  MatNativeDateModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LocalComponent } from './componentes/estaticos/local/local.component';
import { InicioComponent } from './componentes/usuario-crud/inicio/inicio.component';
import { RegistrarUsuarioComponent } from './componentes/usuario-crud/registrar-usuario/registrar-usuario.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'local/:id_local', component: LocalComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'registar', component: RegistrarUsuarioComponent },
  
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 




  
}

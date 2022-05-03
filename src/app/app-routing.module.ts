import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LocalComponent } from './componentes/estaticos/local/local.component';
import { InicioComponent } from './componentes/estaticos/inicio/inicio.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'local/:id_local', component: LocalComponent },
  { path: 'inicio', component: InicioComponent },
 // { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { 




  
}

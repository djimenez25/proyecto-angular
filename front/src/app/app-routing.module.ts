import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscuderiasComponent } from './pages/escuderias/escuderias.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: "escuderias", component: EscuderiasComponent
  },
  {
    path: "gestion", component: GestionComponent
  },
  {
    path: "", pathMatch: "full", component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

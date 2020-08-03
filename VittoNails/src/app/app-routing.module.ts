import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManiComponent } from './mani/mani.component';
import { PediComponent } from './pedi/pedi.component';
import { ManipediComponent } from './manipedi/manipedi.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactoComponent } from './contacto/contacto.component';
import { QuienessomosComponent } from './quienessomos/quienessomos.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/homepage'},
  {path: 'homepage', component:HomepageComponent},
  {path: 'mani', component:ManiComponent},
  {path: 'pedi', component:PediComponent},
  {path: 'manipedi', component:ManipediComponent},
  {path: 'contacto', component:ContactoComponent},
  {path: 'quienessomos', component:QuienessomosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [
  {
    path: 'nav-bar',
    component: NavBarComponent,
    children: [

    ]
  },
  {
    path:'form',
    redirectTo: 'form',
    pathMatch: 'full'
  }


];

@NgModule({
  declarations: [],
  imports: [RouterModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavBarRoutingModule { }

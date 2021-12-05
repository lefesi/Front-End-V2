import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardLoginComponent } from './card-login/card-login.component';

const routes: Routes = [
{path: '',redirectTo:'entar', pathMatch: 'full'},
{path: 'entrar', component:CardLoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

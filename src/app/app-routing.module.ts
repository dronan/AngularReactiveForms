import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { ConcluiCadastroComponent } from './forms/conclui-cadastro/conclui-cadastro.component';

const routes: Routes = [
  {path: 'cadastro', component: FormsComponent},
  {path: 'conclui-cadastro', component: ConcluiCadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

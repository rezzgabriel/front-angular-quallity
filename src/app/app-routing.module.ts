import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteDetailsComponent } from './cliente/cliente-details/cliente-details.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { CreateClienteComponent } from './cliente/create-cliente/create-cliente.component';
import { UpdateClienteComponent } from './cliente/update-cliente/update-cliente.component';

const routes: Routes = [
  {path: 'clientes', component: ClienteListComponent},
  {path: 'cadastra-cliente', component: CreateClienteComponent},
  {path: 'atualiza-cliente/:id', component: UpdateClienteComponent},
  {path: 'detalhe-cliente/:id' , component: ClienteDetailsComponent},
  {path: '', redirectTo: 'clientes', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

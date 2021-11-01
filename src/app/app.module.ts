import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { CreateClienteComponent } from './cliente/create-cliente/create-cliente.component';
import { FormsModule } from '@angular/forms';
import { UpdateClienteComponent } from './cliente/update-cliente/update-cliente.component';
import { ClienteDetailsComponent } from './cliente/cliente-details/cliente-details.component';
import {InputMaskModule} from 'primeng/inputmask';
import {CpfPipe} from './cliente/cpf.pipe';
import {ProgressSpinnerModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    ClienteListComponent,
    CreateClienteComponent,
    UpdateClienteComponent,
    ClienteDetailsComponent,
    CpfPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    InputMaskModule,
    ProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

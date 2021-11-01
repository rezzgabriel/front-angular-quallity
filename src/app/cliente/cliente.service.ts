import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Cliente } from './cliente';


@Injectable({
  providedIn: 'root',

})
export class ClienteService {

  private baseURL = "http://localhost:8080/api/v1/clientes";

  constructor(private httpClient: HttpClient) { }

  getClientesList(): Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(`${this.baseURL}`);
  }

  cadastraCliente(cliente: Cliente): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, cliente);
  }

  getClienteById(id: number): Observable<Cliente>{
    return this.httpClient.get<Cliente>(`${this.baseURL}/${id}`)
  }

  atualizaCliente(id: number, cliente: Cliente): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, cliente);
  }

  excluiCliente(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}

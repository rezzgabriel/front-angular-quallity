import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  clientes: Cliente[];

  constructor(
    private clienteService: ClienteService,
    private router: Router
    ) { }

  ngOnInit(): void{

    this.getClientes();
  }

  private getClientes(){
    this.clienteService.getClientesList().subscribe(
      data => {
      this.clientes = data;
    });
  }

  visualizaCliente(id: number){
    this.router.navigate(['detalhe-cliente', id])
  }

  atualizaCliente(id: number){
    this.router.navigate(['atualiza-cliente', id]);
  }

  excluiCliente(id: number){
    this.clienteService.excluiCliente(id).subscribe(
      data => {
        console.log(data);
        this.getClientes();
    })
  }

}

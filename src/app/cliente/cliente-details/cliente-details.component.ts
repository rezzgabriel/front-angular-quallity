import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-details',
  templateUrl: './cliente-details.component.html',
  styleUrls: ['./cliente-details.component.css']
})
export class ClienteDetailsComponent implements OnInit {

  id: number;
  cliente: Cliente;
  constructor(
    private route: ActivatedRoute,
    private clienteService: ClienteService,
    private router: Router
    ) { }

  ngOnInit(): void{
    this.id = this.route.snapshot.params['id'];

    this. cliente = new Cliente();
    this.clienteService.getClienteById(this.id).subscribe( data => {
      this.cliente = data;
    })
  }

  atualizaCliente(id: number){
    this.router.navigate(['atualiza-cliente', id]);
  }

}

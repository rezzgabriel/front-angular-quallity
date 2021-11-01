import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteListComponent } from '../cliente-list/cliente-list.component';
import { ClienteService } from '../cliente.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-cliente',
  templateUrl: './update-cliente.component.html',
  styleUrls: ['./update-cliente.component.css']
})
export class UpdateClienteComponent implements OnInit {

  id: number;
  cliente: Cliente = new Cliente();
  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clienteService.getClienteById(this.id).subscribe( data => {
      this.cliente = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.clienteService.atualizaCliente(this.id, this.cliente).subscribe( data => {
      this.navegarParaLista();
    },
    error => console.log(error))
  }

  navegarParaLista(){
    this.router.navigate(['/clientes']);
  }

  consultaCEP(cep, form){
    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if(validacep.test(cep)) {
        this.http.get(`https://viacep.com.br/ws/${cep}/json`)
        .subscribe(data => this.hidrataDadosCep(data, form));
      }
    }

  }

  hidrataDadosCep(data, formulario){


    formulario.form.patchValue({
      cep: data.cep,
      logradouro: data.logradouro,
      bairro: data.bairro,
      cidade: data.localidade,
      uf: data.uf,
    })
  }
}

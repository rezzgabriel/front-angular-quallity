import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.css']
})
export class CreateClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();
  validaForm = false;
  loading = false;

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private http: HttpClient,
    ) { }

  ngOnInit(): void {
  }

  cadastraCliente(form: NgForm) {
    if (form.valid) {
      this.loading = true;
      setTimeout(() => {
        this.cliente.cpf = this.cliente.cpf.replace('.', '');
        this.cliente.cpf = this.cliente.cpf.replace('-', '');
        this.clienteService.cadastraCliente(this.cliente).subscribe( data => {
            console.log(data);
            this.navegarParaLista();
            this.loading = false;
          },
          error => console.log(error)
        );
      }, 1500);
    } else {
      this.validaForm = true;
      this.loading = false;
      console.log('campo obrigatório não prenchido');
    }

  }

  navegarParaLista(){
    this.router.navigate(['/clientes']);
  }

  onSubmit(form){
    console.log(this.cliente);
    this.cadastraCliente(form);
  }

  consultaCEP(cep, form){
    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != '') {

      //Expressão regular para validar o CEP.
      const validacep = /^[0-9]{8}$/;

      // Valida o formato do CEP.
      if(validacep.test(cep)) {
        this.http.get(`https://viacep.com.br/ws/${cep}/json`)
        .subscribe(data => this.setDadosCep(data, form));
      }
    }

  }

  setDadosCep(data, formulario){


    formulario.form.patchValue({
      cep: data.cep,
      logradouro: data.logradouro,
      bairro: data.bairro,
      cidade: data.localidade,
      uf: data.uf,
    })
  }

}

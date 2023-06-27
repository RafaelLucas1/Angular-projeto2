import { Component, OnInit } from '@angular/core';

import { ContatoService } from '../contato.service';

import { ToastrService } from 'ngx-toastr';

import { contato } from '../contato';



@Component({

  selector: 'app-list-contato',

  templateUrl: './list-contato.component.html',

  styleUrls: ['./list-contato.component.css'],

})

export class ListContatoComponent implements OnInit {

  page = 1;

  listaContatos: contato[] = [];

  listaVazia: Boolean = true;

  mostrarLoader: Boolean = true;



  constructor(

    private contatoService: ContatoService,

    private toastr: ToastrService

  ) {}



  ngOnInit() {

    let fetchData = this.contatoService.getContatoList();

    fetchData.snapshotChanges().subscribe((data) => {

      this.listaContatos = [];

      if (data.length <= 0) {

        this.listaVazia = true;

      } else {

        this.listaVazia = false;

        data.forEach((item: any) => {

          let contato = item.payload.toJSON();

          contato['$key'] = item.key;

          this.listaContatos.push(contato as contato);

        });

      }

      this.mostrarLoader = false;

    });

  }



  deleteContato(contato: contato) {

    if (window.confirm('Tem certeza que deseja remover o contato?')) {

      if (contato.$key != null) {

        this.contatoService.deleteContato(contato.$key);

        this.toastr.success(contato.nome + ' removido com sucesso.');

      }

    }

  }

}

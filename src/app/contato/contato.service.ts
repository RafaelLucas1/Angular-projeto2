import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';

import { contato } from './contato';
@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  listaContatosRef: AngularFireList<contato>;
  contatoRef: AngularFireObject<contato>;
  constructor(private db: AngularFireDatabase) {

    //inicialização dos caminhos ao firebase

    this.listaContatosRef = this.db.list('list-contatos');

    this.contatoRef = this.db.object('list-contatos/' + 0);

  }


  // Inserir Contato

  insertContato(contato: contato) {
    
    this.listaContatosRef.push({

      nome: contato.nome,

      telefone: contato.telefone,

      idade: contato.idade,

    });

  }



  // Buscar um único Objeto Contato pelo seu ID

  getContatoById(id: string): AngularFireObject<contato> {

    this.contatoRef = this.db.object('list-contatos/' + id);

    return this.contatoRef;

  }



  // Fetch Students List

  getContatoList(): AngularFireList<contato> {

    return this.listaContatosRef;

  }



  // Update Student Object

  updateContato(contato: contato) {

    this.contatoRef.update({

      nome: contato.nome,

      telefone: contato.telefone,

      idade: contato.idade,

    });

  }



  // Delete Student Object

  deleteContato(id: string) {

    this.contatoRef = this.db.object('list-contatos/' + id);

    this.contatoRef.remove();

  }

}

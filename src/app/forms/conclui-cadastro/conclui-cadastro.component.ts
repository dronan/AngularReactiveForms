import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conclui-cadastro',
  templateUrl: './conclui-cadastro.component.html',
  styleUrls: ['./conclui-cadastro.component.css']
})
export class ConcluiCadastroComponent implements OnInit {

  nome: string

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe( params => this.nome = params.nome )
  }

}

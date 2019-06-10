import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cadastro } from './cadastro.model';
import { CadastroService } from './cadastro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  regForm : FormGroup

  emailParttern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  datePatten = /^\d{2}\/\d{2}\/\d{4}$/

  constructor(private formBuilder: FormBuilder, private cadastroService: CadastroService, private router: Router) { }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      nome: this.formBuilder.control('', [Validators.required]),
      data: this.formBuilder.control('', [Validators.required, Validators.pattern(this.datePatten)]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailParttern)])
    })
  }


  enviaForm(cadastro: Cadastro){
    console.log(this.regForm.value)

    cadastro = new Cadastro(this.regForm.value.nome, this.regForm.value.data, this.regForm.value.email)

    this.cadastroService.finalizaCadastro(cadastro)
                        .subscribe(
                          (success) => {
                            this.router.navigate(['/conclui-cadastro'], { queryParams: {nome: this.regForm.value.nome }})
                          },
                          (fail) => {
                            console.log("Erro", fail)
                          }
                        )

  }

}

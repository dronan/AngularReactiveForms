import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  regForm : FormGroup

  emailParttern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  datePatten = /^\d{2}\/\d{2}\/\d{4}$/

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      nome: this.formBuilder.control('', [Validators.required]),
      data: this.formBuilder.control('', [Validators.required, Validators.pattern(this.datePatten)]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailParttern)])
    })
  }


  enviaForm(){
    console.log(this.regForm.value)
  }

}

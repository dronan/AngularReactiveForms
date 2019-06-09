import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms'

@Component({
  selector: 'app-input-container',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterContentInit {

  inputRef : any

  @Input() errormsg: string
  @Input() label: string

  @ContentChild(NgModel) model : NgModel
  @ContentChild(FormControlName) control : FormControlName

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    this.inputRef = this.model || this.control;
    if (this.inputRef === undefined) {
      throw new Error("Erro de implementacao do input!");
    }
  }


  hasSuccess(): boolean {
    return this.inputRef.valid && (this.inputRef.dirty || this.inputRef.touched)
  }

  hasError():boolean{
    return this.inputRef.invalid && (this.inputRef.dirty || this.inputRef.touched)
  }

}

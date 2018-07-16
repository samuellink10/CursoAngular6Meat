import { Component, OnInit ,Input ,ContentChild,AfterContentInit} from '@angular/core';
import {NgModel, FormControlName} from '@angular/forms'

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {


@Input() label: string
@Input() messageError: string
@ContentChild(NgModel) model : NgModel
@ContentChild(FormControlName) control : FormControlName

input : any
constructor() { }

  ngOnInit() {
  }
  ngAfterContentInit() {
    this.input = this.model || this.control
    if (this.input === undefined){
      throw new Error('Esse component precisa ser usado com uma diretiva ngModel!') 
    }
  }
  hasSucess(): boolean{
    return this.input.valid && (this.input.dirty || this.input.touched)
  }
  hasError(): boolean{
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }

}

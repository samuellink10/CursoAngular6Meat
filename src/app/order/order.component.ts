import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../share/radio/radio-option.model';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { OrderService } from './order.service';
import { Order, OrderItem } from './order.model';
import 'rxjs/add/operator/map'
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms'

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup
  emailPartten = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  numberPartten = /^[0-9]*$/
  paymentOptions: RadioOption[] = [
    {label: "Dinheiro",value: "MON"},
    {label: "Cartão de Débito",value:"DEB"},
    {label:"Cartão Refeição",value:"REF"}
  ]

  constructor(private orderService: OrderService , private router: Router, private formBuilder: FormBuilder) { }
  delivery : number = 8
 
  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('',[Validators.required,Validators.minLength(3)]),
      email: this.formBuilder.control('',[Validators.required,Validators.pattern(this.emailPartten)]),
      emailConfirmation: this.formBuilder.control('',[Validators.required,Validators.pattern(this.emailPartten)]),
      address: this.formBuilder.control('',[Validators.required,Validators.minLength(3)]),
      number: this.formBuilder.control('',[Validators.required,Validators.minLength(3),Validators.pattern(this.numberPartten)]),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('',[Validators.required])

    },{validator:OrderComponent.equalsTo})
  }
  static equalsTo(group: AbstractControl) : {[key:string]:boolean}{
    const email = group.get('email')
    const emailConfirmation = group.get('emailConfirmation')
    if(!email || !emailConfirmation){
      return undefined

    }
    if (email !== emailConfirmation){
      return {emailsNotMatch: true}
    }
    return undefined
  }
  itemsValue(): number{
    return this.orderService.itemsValue()
  }
  cartItems(): CartItem[]{
    return this.orderService.cartItem()
  }
  increaseQty(item: CartItem){
    this.orderService.increaseQty(item)
  }
  decreaseQty(item: CartItem){
    this.orderService.decreaseQty(item)
  }
  remove(item: CartItem){
    this.orderService.remove(item)
  }
  checkOrder(order: Order){
    order.orderItems = this.cartItems()
                      .map((item: CartItem)=> new OrderItem(item.quantity, item.menuItem.id))

    this.orderService.checkOrder(order).subscribe((orderId: string)=> {
      this.router.navigate(['/order-summary'])
      this.orderService.clear()
    })
    console.log(order)                 
  }

}

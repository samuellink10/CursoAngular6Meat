import { NgModule } from "../../../node_modules/@angular/core";
import { OrderComponent } from "./order.component";
import { DeliveryCostComponent } from "./delivery-cost/delivery-cost.component";
import { OrderItemComponent } from "./order-item/order-item.component";
import { SharedModule } from "../share/shared.module";
import {Routes,RouterModule} from '@angular/router'

const ROUTES: Routes =[
{path: '',component: OrderComponent}
]

@NgModule({
    declarations:[OrderComponent,DeliveryCostComponent,OrderItemComponent],
    imports:[SharedModule,RouterModule.forChild(ROUTES)]
})

export class OrderModule{ }
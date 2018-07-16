import { NgModule } from "../../../node_modules/@angular/core";
import { AboutComponent } from "./about.component";
import {Routes,RouterModule} from '@angular/router'

const ROUTER : Routes = [
    {path:'',component: AboutComponent}
]
@NgModule(
    {declarations:[AboutComponent],
     imports:[RouterModule,RouterModule.forChild(ROUTER)]   

})
export class AboutModule{

}
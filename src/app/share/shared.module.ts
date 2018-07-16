import { NgModule } from "../../../node_modules/@angular/core";
import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";
import { CommonModule } from "../../../node_modules/@angular/common";
import { FormsModule, ReactiveFormsModule } from "../../../node_modules/@angular/forms";

@NgModule({
    declarations:[InputComponent,RadioComponent,RatingComponent],
    imports:[CommonModule,FormsModule,ReactiveFormsModule],
    exports:[InputComponent,RadioComponent,RatingComponent,
             CommonModule,FormsModule,ReactiveFormsModule]
})
export class SharedModule{}
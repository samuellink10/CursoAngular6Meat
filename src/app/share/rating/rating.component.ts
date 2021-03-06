import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

@Output() rated = new EventEmitter()
  rates: number[] = [1,2,3,4,5]
  rate : number = 0
  previousRate: number
  constructor() { }

  ngOnInit() {
  }
  setRate(r: number){
    this.rate = r
    this.previousRate = undefined
    this.rated.emit(r)
  }
  setTemporaryRate(r: number){
      if(this.previousRate === undefined){
        this.previousRate = this.rate
      }
      this.rate = r
  }
  setTemporaryClear(){
      if (this.previousRate !== undefined){
        this.rate = this.previousRate
        this.previousRate = undefined
      }
  }

}

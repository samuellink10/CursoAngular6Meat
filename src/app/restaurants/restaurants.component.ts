import { Component, OnInit } from '@angular/core';
import {Restaurant} from './restaurant/restaurant.model'
import {RestaurantsService} from './restaurants.service'

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: []
})
export class RestaurantsComponent implements OnInit {

  constructor(private restaurantsService: RestaurantsService) { }
  restaurants: Restaurant[] 
  ngOnInit() {
    this.restaurantsService.restaurants().subscribe(r => this.restaurants = r)
    console.log(this.restaurants)
  }

}

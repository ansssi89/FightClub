import { Component, OnInit } from '@angular/core';
import { FoodsServiceService } from 'src/app/foods-service.service';
import { Food } from 'src/app/food';
import { Fight} from 'src/app/fight'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: Fight
  error: Error

  constructor(private foodservice: FoodsServiceService) { 

  }

  // Loads the number of how many times categories have been downloaded from the backend

  loadFights(){
    this.foodservice.getFightCount()
      .subscribe((data) =>{
        this.data = data, error => this.error = error
        console.log(data)
      })
  }

  ngOnInit() {
    this.loadFights()
  }

}

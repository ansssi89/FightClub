import { Component, OnInit, Output } from '@angular/core';
import { FoodsServiceService } from '../../foods-service.service'
import { Appfeedback } from 'src/app/appfeedback';
import { Food } from '../../food';
import { EventEmitter } from 'events';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  // @Output() delFb: EventEmitter<Appfeedback> = new EventEmitter();

  message: string;
  username: string;
  data: Appfeedback [];
  error: Error
  swearwords = ['vittu', 'saatana', 'perkele', 'helvetti', 'fuck']
  mesForLoop: string = ''
  unForLoop: string = ''
  name: Food
  emoji: string
  food: Food
  fbList: any[] = []

  words: string[] = ['shit', 'shot', 'mitten']

  constructor(public Foodservice: FoodsServiceService) { }

  getFb() {
    this.Foodservice.getFeedback()
      .subscribe((data) => {
        this.data = data, error => this.error = error
        this.fbList.push(this.data)
        console.log('getFb-data: ', this.data)
        console.log('getFb-lista: ', this.fbList)
      })
  }

  delFb(feedback: Appfeedback): void {
    this.data = this.data.filter(h => h !==feedback);
    this.Foodservice.deleteFeedback(feedback).subscribe();
  }

  addCategory(name: string, emoji: string) {
    this.Foodservice.sendFood(this.name, this.emoji)
    .subscribe(
      res => {
        console.log(res)
      },
      err => {
        console.log('Error in addFood/Category', err)
      }
    )
  }

  delFood(d: Food) {
    this.Foodservice.deleteFood(d)
      .subscribe(data => {
        this.data
        // this.getFb()
      })
    // console.log('removed', d)
    //   this.fbList = this.fbList.filter(f => f.id !== f.id)
  }

  loadFoods() {
    this.Foodservice.getFoods()
      .subscribe((food) => {
        this.food = food, error => this.error = error
        // console.log(data)
      })
  }

  ngOnInit() {

    this.getFb()
    this.loadFoods()
  }

}
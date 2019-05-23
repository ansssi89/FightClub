import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-nac',
  templateUrl: './nac.component.html',
  styleUrls: ['./nac.component.css']
})
export class NacComponent implements OnInit {

  public chores: string[] = ['🔬Hoover the house', '🔆Wash windows', '🍂Do yard work', '🍴Do the dishes', '💆‍♂️Get massaged', '📺Watch Netflix', '😎Netflix and chill', '🎮Play Fifa on console', '♻️Do the laundry', '❤️️Talk about feelings', '🛀Take a bath', '🏕 Go hike' ];

  public breakfast: string[] = ['🍚Porridge', '🍇Fruit Salad', '🥣Yoghurt', '🍞Sandwiches', 'Pass breakfast'];

  public lunch: string[] = ['🥦Salad', '🚗Go out for brunch', '🍫Something light...', '🍲A soup', '🥘A vegetable soup', '🍜Noodles'];
  
  public dinner: string[] = ['🍖Steak', '🍝Pasta', '💘Go out for dinner', '🍟Fries and sausages', '🍦Ice cream', '🍕Order Pizza']

  public pOneBreakfast: string = 'P1 Breakfast';
  public pTwoBreakfast: string = 'P2 Breakfast';
  public pOneMorChore: string = 'P1 Chore';
  public pTwoMorChore: string = 'P2 Chore';
  public breakfastWin: string = 'Yet to be decided';
  public morChoreWin: string = 'Needs to be chosen';

  public pOneLunch: string = 'P1 Lunch';
  public pTwoLunch: string = 'P2 Lunch';
  public pOneDayChore: string = 'P1 Chore';
  public pTwoDayChore: string = 'P2 Chore';
  public lunchWin: string = 'Decide lunch';
  public dayChoreWin: string = 'Go ahead make your bed'

  public pOneDinner: string = 'P1 Dinner';
  public pTwoDinner: string = 'P2 Dinner';
  public pOneEveChore: string = 'P1 Chore';
  public pTwoEveChore: string = 'P2 Chore';
  public dinnerWin: string = 'Have a nice evening';
  public eveChoreWin: string = 'Better go to bed...';


  public menu = {
    'display' : 'inline-block'
  }
  public scheduleHeader = {
    'display' : 'none'
  }
  public morningHeader = {
    'display' : 'none'
  }
  public morningTodo = {
    'display' : 'none'
  }
  public dayHeader = {
    'display' : 'none'
  }
  public dayTodo = {
    'display' : 'none'
  }
  public eveHeader = {
    'display' : 'none'
  }
  public eveTodo = {
    'display' : 'none'
  }

  breakfastBattle() {
    this.breakfastWin = (Math.floor(Math.random() * 2) == 0) ? this.pOneBreakfast : this.pTwoBreakfast;
    console.log(this.breakfastWin)
  }

  morChorBattle() {
    this.morChoreWin = (Math.floor(Math.random() * 2) == 0) ? this.pOneMorChore : this.pTwoMorChore;
    console.log(this.morChoreWin)
  }

  lunchBattle() {
    this.lunchWin = (Math.floor(Math.random() * 2) == 0) ? this.pOneLunch : this.pTwoLunch;
    console.log(this.lunchWin)
  }

  dayChorBattle() {
    this.dayChoreWin = (Math.floor(Math.random() * 2) == 0) ? this.pOneDayChore : this.pTwoDayChore;
    console.log(this.dayChoreWin)
  }
  dinnerBattle() {
    this.dinnerWin = (Math.floor(Math.random() * 2) == 0) ? this.pOneDinner : this.pTwoDinner;
    console.log(this.dinnerWin)
  }

  eveChorBattle() {
    this.eveChoreWin = (Math.floor(Math.random() * 2) == 0) ? this.pOneEveChore : this.pTwoEveChore;
    console.log(this.dayChoreWin)
  }

  assistPlayers() {
    const dialogRef = this.dialog.open(GnomeScene);

    setTimeout(() => {
      this.dialog.closeAll()
    }, 9500)

    dialogRef.afterClosed().subscribe(result => {
      
    })
  }


  test() {
    this.assistPlayers()
    
    setTimeout(() => {
      this.menu = {
        'display': 'none'
      }
      this.scheduleHeader = {
        'display': 'inline-block'
      }
    }, 500);

    setTimeout(() => {
      this.breakfastBattle()
      this.morningHeader = {
        'display': 'inline-block'
      }
    }, 2500);

    setTimeout(()=>{
      this.morChorBattle()
      this.morningTodo = {
        'display': 'inline-block'
      }
    }, 3500)

    setTimeout(() => {
      this.lunchBattle()
      this.dayHeader = {
        'display': 'inline-block' 
      }
    }, 5000);
    
    setTimeout(()=>{
      this.dayChorBattle()
      this.dayTodo = {
        'display': 'inline-block'
      }
    }, 6500)

    setTimeout(() => {
      this.dinnerBattle()
      this.eveHeader = {
        'display': 'inline-block'
      }
    }, 8000);
    
    setTimeout(()=>{
      this.eveChorBattle()
      this.eveTodo =  {
        'display': 'inline-block'
      }
    }, 9500)
    
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

}

@Component({
  selector: 'gnome-content',
  templateUrl: 'gnome.html',
})
export class GnomeScene { }
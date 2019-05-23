import { Component, OnInit } from '@angular/core';
import { style } from '@angular/animations';
import { FoodsServiceService } from '../../foods-service.service'
// import { ThemeModule } from '../../theme/theme.module';
import { Food } from '../../food';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css']
})
export class FightComponent implements OnInit {

  public playerOneSelection: string = 'Pick your battle'
  public playerTwoSelection: string = 'Choose wisely...'
  public winner: string = 'Yet to be decided...';
  // public foods: any;
  public data: Food;
  public error: Error;
  public picStyle = {
    'display': 'none'
  }
  public textStyle = {
    'display': 'block'
  }
  public buttonStyle = {
    'display': 'none'
  }
  public countdown: string
  public againStyle = {
    'display': 'none'
  }

  // foods: string[] = ['🍔Burger', '🍕Pizza', '🍣Sushi', '🍛Kebab', '🍟McDonalds', '🍔Hesburger', '🍲Taco Bell', '🍌Stay Home', '🥢Chinese']

  constructor(public foodservice: FoodsServiceService, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.loadFoods()
  }

  // Loads categories for playe selection screen

  loadFoods() {
    this.foodservice.getFoods()
      .subscribe((data) => {
        this.data = data, error => this.error = error
        // console.log(data)
      })
  }

  // Launches a help module for players if they haven't chosen a category

  assistPlayers() {
    const dialogRef = this.dialog.open(DialogContent);
    dialogRef.afterClosed().subscribe(result => {
    })
  }

  // Launches a fightscene when both players have chosen a category

  openFightScene() {
    const dialogRef = this.dialog.open(FightScene);
    // this.showCountdown()
    setTimeout(() => {
      this.dialog.closeAll()
    }, 8800)

    dialogRef.afterClosed().subscribe(result => {

    })
  }

  //

  // showCountdown() {
  //   this.countdown = 'Are'
  //   setTimeout(() => {
  //     this.countdown = 'We'
  //   }, 1000)
  //   setTimeout(() => {
  //     this.countdown = 'Ready?'
  //   }, 2000)
  //   setTimeout(() => {
  //     this.countdown = 'FIGHT!'
  //   }, 3000)
  // }

  fightScene() {
    this.buttonStyle = {
      'display': 'none'
    }
    this.picStyle = {
      'display': 'block'
    }
    this.textStyle = {
      'display': 'none'
    }
    this.againStyle = {
      'display': 'none'
    }
    setTimeout(() => {
      this.winner = (Math.floor(Math.random() * 2) == 0) ? this.playerOneSelection : this.playerTwoSelection;
      this.countdown = ''
      this.picStyle = {
        'display': 'none'
      }
      this.textStyle = {
        'display': 'block'
      }
      this.buttonStyle = {
        'display': 'block'
      }
      this.againStyle = {
        'display': 'block'
      }
    }, 6000);
  }

  // Method for google button

  redirect() {
    this.router.navigate(['ogsite'])
  }

  // Method that randomly chooses a winner from players categories

  revealWinner() {
    if (this.playerOneSelection == 'Pick your battle' || this.playerTwoSelection == 'Choose wisely...') {
      this.assistPlayers()
    } else {
      this.openFightScene()
      // this.showCountdown();
      setTimeout(() => {
        this.fightScene()
      }, 3000);


    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

    //Sends the winner to foodservice
    this.foodservice.winner = this.winner
  }

  // console.log("Hei")

}

@Component({
  selector: 'dialog-content',
  templateUrl: 'dialog-content.html',
})
export class DialogContent { }

@Component({
  selector: 'fight-scene',
  templateUrl: 'fightscene.html',
})

export class FightScene implements OnInit {

  public countdown: string = 'jotain'
  public picStyle = {
    'display': 'none'
  }
  public textStyle = {
    'display': 'block'
  }

  // Starts a countdown

  showCountdown() {
    this.countdown = 'Are'
    setTimeout(() => {
      this.countdown = 'We'
    }, 1000)
    setTimeout(() => {
      this.countdown = 'Ready?'
    }, 2000)
    setTimeout(() => {
      this.countdown = 'FIGHT!'
    }, 3000)
  }

  // Reveals the fightscene

  fightScene() {
    this.picStyle = {
      'display': 'block'
    }
    this.textStyle = {
      'display': 'none'
    }
    setTimeout(() => {
      this.countdown = ''
      this.picStyle = {
        'display': 'none'
      }
      this.textStyle = {
        'display': 'block'
      }
      // this.buttonStyle = {
      //   'display': 'block'
      // }
    }, 5900);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.showCountdown()
    setTimeout(() => {
      this.fightScene()
    }, 3000);
  }

}
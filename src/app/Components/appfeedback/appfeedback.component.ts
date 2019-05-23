import { Component, OnInit } from '@angular/core';
import { FoodsServiceService } from '../../foods-service.service'
import { Appfeedback } from 'src/app/appfeedback';

@Component({
  selector: 'app-appfeedback',
  templateUrl: './appfeedback.component.html',
  styleUrls: ['./appfeedback.component.css']
})
export class AppfeedbackComponent implements OnInit {
  message: string;
  username: string;
  data: Appfeedback
  error: Error
  swearwords = ['vittu', 'saatana', 'perkele', 'helvetti', 'fuck']
  mesForLoop: string = ''
  unForLoop: string = ''
  feedId: any

  words: string[] = ['shit', 'shot', 'mitten']

  constructor(private Foodservice: FoodsServiceService) { }

  // Method to sen a feedback to backend  

  sendFb(message: string, username: string) {

    // Filter for badwords in feedbackforms fields
    // console.log(this.username)
    this.mesForLoop = this.message.toLowerCase();
    this.unForLoop = this.username.toLowerCase()
    // console.log('un',this.unForLoop)

    // Loop that checks if feedback or username matches a bad word in swearwords array

    for(let i = 0; i< this.swearwords.length; i++){
      if (this.mesForLoop == this.swearwords[i] || this.unForLoop == this.swearwords[i])
      {alert('Go wash your mouth')} 
    } 

    //Sends a feedback to backend

    this.Foodservice.sendFeedback(this.message, this.username)
      .subscribe(
        res => {
          console.log(res)
        },
        err => {
          console.log('Error occured', err)
        }
      )
      this.feedId = document.getElementById('feedid').style.display = "none";
      document.getElementById('thanks').textContent = "Thanks for your feedback, champion!";
      
  }

  ngOnInit() {

    //Gets feedbacks in the launch of page

  }

}

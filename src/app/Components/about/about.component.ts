import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  people:object[]=[
    {name:'Sari', email:'sari(a)email.com',phone:'040-1234567', title: 'Heroku Goddess'},
    {name:'Laura', email:'laura(a)email.com',phone:'045-1234567', title: 'Queen of Google Maps'},
    {name:'Anssi', email:'anssi(a)email.com',phone:'050-1234567', title: 'FightClub Greyhat Hacker'},
    {name:'Mikko', email:'mikko(a)email.com',phone:'044-1234567', title: 'Angular Demigod'}

  ]
  constructor() { }

  ngOnInit() {
  }

}

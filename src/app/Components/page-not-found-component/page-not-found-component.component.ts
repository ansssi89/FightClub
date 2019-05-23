import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found-component',
  templateUrl: './page-not-found-component.component.html',
  styleUrls: ['./page-not-found-component.component.css']
})
export class PageNotFoundComponentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {

    // Sets timer for the site to be visible for only 5 seconds, after that redirects to homepage.

    setTimeout(()=>{
      this.router.navigate([''])
    },5000)
    
  }

}

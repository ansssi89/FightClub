/// <reference types="@types/googlemaps" />

import { FoodsServiceService } from 'src/app/foods-service.service';

import { Component, OnInit } from '@angular/core';
import { FightComponent } from '../fight/fight.component';
// import { } from  'googlemaps';

@Component({
  selector: 'app-ogsite',
  templateUrl: './ogsite.component.html',
  styleUrls: ['./ogsite.component.css']
})
export class OgsiteComponent implements OnInit {
  lat: number;
  lng: number;
  map: any;
  pos: any;
  winner: string;
  keyCode = 13

  constructor(private foodservice: FoodsServiceService) {
  }



  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
      },
        err => {
          reject(err);
        });
    });
  }

  initAutocomplete() {
    this.getPosition()
      .then(pos => {
        console.log(`Position: ${pos.lng} ${pos.lat}`);
        var long = pos.lng;
        var lati = pos.lat;

        console.log('yritys', long, lati);
        var map = new google.maps.Map(document.getElementById('map'), {
          center: { lat: lati, lng: long },
          zoom: 13,
          disableDefaultUI: true,
          zoomControl: true,
          mapTypeControl: true,
          mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            position: google.maps.ControlPosition.RIGHT_TOP
          }
        });

        var currentLocation = { lat: lati, lng: long };
        var markero = new google.maps.Marker({
          position: currentLocation,
          animation: google.maps.Animation.BOUNCE
        })
        markero.setMap(map);

        // Create the search box and link it to the UI element.
        var input = <HTMLInputElement>document.getElementById('pac-input');
        input.value = this.winner
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        console.log(map)

          // Bias the SearchBox results towards current map's viewport.
          map.addListener('bounds_changed', function () {
            searchBox.setBounds(map.getBounds());
            // searchBox.changed()
          });

        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.

       searchBox.addListener('places_changed', function () {
          // console.log('searchbox', searchBox)
          var places = searchBox.getPlaces();
          console.log('tässä on places', places)
          // searchBox.set('places', this.input.value ||[])

          // console.log(places)
          // places.push(this.winner)
          if (places.length == 0) {
            return;
          }//

          // Clear out the old markers.
          markers.forEach(function (marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();

          places.forEach(function (place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
      });
      })
      
  }


  ngOnInit() {
    this.winner = this.foodservice.winner
     //this.winner = 'pizza'
    console.log('latauksen yhteydessä ', this.winner)
    this.initAutocomplete();
    // const getWinner = () =>{
    //   console.log('Get winner')
    //   document.getElementById('pac-input').value = this.winner
    // }

    // getWinner()

  }
}
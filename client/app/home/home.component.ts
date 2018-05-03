import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";
import { inject } from '@angular/core/testing';
import { Inject } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private doc: Document) { }

  ngOnInit() {
    // Set the date we're counting down to
    var countDownDate = new Date("June 23, 2018 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      document.getElementById("demo").innerHTML = days + "D " + hours + "h "
        + minutes + "m " + seconds + "s ";

      // If the count down is finished, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);

    window.addEventListener("scroll", function (event) {
      var scroll = this.scrollY;
      if (scroll == 0) {
        document.getElementById('changecolor').style.backgroundColor = "transparent";
      } else {
        document.getElementById('changecolor').style.backgroundColor = "white";
      }
    });
  }



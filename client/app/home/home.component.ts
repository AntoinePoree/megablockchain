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
    var countDownDate = new Date("June 23, 2018 15:37:25").getTime();
    var x = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      document.getElementById("demo").innerHTML = days + "J " + hours + "h "
        + minutes + "m " + seconds + "s ";
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
        document.getElementById('changecolor').style.backgroundColor = "black";
      }
    });
  }}

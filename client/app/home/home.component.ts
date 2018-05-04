import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";
import { inject } from '@angular/core/testing';
import { Inject } from '@angular/core';
import { element } from 'protractor';
import { CatsComponent } from './../cats/cats.component';
import { CatService } from '../services/cat.service';
import { Cat } from '../shared/models/cat.model';
import { ToastComponent } from '../shared/toast/toast.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  emailArray = [];
  changedChallenge: boolean = false;

  addTaskValue = '';

  cat = new Cat();
  cats: Cat[] = [];
  isLoading = true;
  isEditing = false;

  addCatForm: FormGroup;

  pays= new FormControl('', Validators.required);
  
  team= new FormControl('', Validators.required);
  teams= new FormControl('', Validators.required);
  player= new FormControl('', Validators.required);
  players= new FormControl('', Validators.required);

  onClickSubmit(data) {
    if (data.emailid >= 0) {
      alert('veuillez entrer une adresse mail !');
    } else {
      this.emailArray.push(this.addTaskValue);
      this.addTaskValue = '';
      // data.emailid = '';
      console.log(this.emailArray);
    }
  }

  nextchallengefn() {
    document.getElementById('challenge1').style.opacity = "0";
    document.getElementById('challenge2').style.left = "0";
    document.getElementById('challenge2').style.opacity = "1";
    this.changedChallenge = true;
  }

  previouschallengefn() {
    document.getElementById('challenge1').style.opacity = "1";
    document.getElementById('challenge2').style.opacity = "0";
    document.getElementById('challenge2').style.left = "100vw";
    
    this.changedChallenge = false;
  }

  getCats() {
    this.catService.getCats().subscribe(
      data => this.cats = data,
      error => console.log(error),
      () => this.isLoading = false,
    );
    console.log(this.cats)
  }

  

constructor(@Inject(DOCUMENT) private doc: Document,private catService: CatService,
private formBuilder: FormBuilder,
public toast: ToastComponent) { }

ngOnInit() {
  var countDownDate = new Date("June 23, 2018 13:00:00").getTime();
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

  this.getCats();
  this.addCatForm = this.formBuilder.group({
   

  });
}
}



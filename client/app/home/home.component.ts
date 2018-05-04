import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";
import { inject } from '@angular/core/testing';
import { Inject } from '@angular/core';
import { element } from 'protractor';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CatService } from '../services/cat.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { Cat } from '../shared/models/cat.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  emailArray = [];
  changedChallenge: boolean = false;
  addTaskValue = '';
  paysencours = undefined;

  cat = new Cat();
  cats: Cat[] = [];
  isLoading = true;
  isEditing = false;

  addCatForm: FormGroup;

  team = new FormControl('', Validators.required);
  teams = new FormControl('', Validators.required);
  player = new FormControl('', Validators.required);
  players = new FormControl('', Validators.required);

  // const congoid = ['5aeb191b0412b210dcf84a2e'];
  // const result = this.congoid.filter(congoid => congoid.length > 6);
  // console.log(result, congoid);
  getTeam(){
    
  }

  clearall() {
    document.getElementById('popup').style.display = 'none';
    this.paysencours = undefined;
    document.getElementById('test').innerHTML = '';
  }

  addwords() {
    document.getElementById('test').innerHTML = "Pour le pays " + this.paysencours;
  }

  addcongo() {
    document.getElementById('popup').style.display = 'block';
    this.paysencours = "congo";
    this.addwords();
  }

  addfrance() {
    document.getElementById('popup').style.display = 'block';
    this.paysencours = "france";
    this.addwords();
  }

  addrussie() {
    document.getElementById('popup').style.display = 'block';
    this.paysencours = "russie";
    this.addwords();
  }

  addperou() {
    document.getElementById('popup').style.display = 'block';
    this.paysencours = "pérou";
    this.addwords();
  }

  addsenegal() {
    document.getElementById('popup').style.display = 'block';
    this.paysencours = "sénégal";
    this.addwords();
  }

  addalgerie() {
    document.getElementById('popup').style.display = 'block';
    this.paysencours = "algérie";
    this.addwords();
  }

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
  }

  scrolltoacceuil() {
    window.scrollTo(0, 0)
  }

  scrolltopres() {
    window.scrollTo(0, document.getElementById('pres').offsetTop - 100)
  }

  scrolltoequipes() {
    window.scrollTo(0, document.getElementById('contequipes').offsetTop - 50)
  }

  scrolltotours() {
    window.scrollTo(0, document.getElementById('tours').offsetTop - 50)
  }


  constructor(@Inject(DOCUMENT) private doc: Document, private catService: CatService,
    private formBuilder: FormBuilder,
    public toast: ToastComponent) { }

  ngOnInit() {
    this.getCats();
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
        console.log(document.getElementById('contequipes').offsetTop)
      }
    });


  }
}



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css'],
})
export class PresentationComponent implements OnInit {


  scrolltotours(){
    window.scrollTo(0,document.getElementById('tours').offsetTop - 50)
  }
  
  constructor() { }

  ngOnInit() {
  }

}

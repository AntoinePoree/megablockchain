import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { CatService } from '../services/cat.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { Cat } from '../shared/models/cat.model';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css'],
})
export class CatsComponent implements OnInit {

  cat = new Cat();
  cats: Cat[] = [];
  isLoading = true;
  isEditing = false;

  addCatForm: FormGroup;
  
  pay = new FormControl('', Validators.required);
  pays = new FormControl('', Validators.required);
  teams = new FormControl('', Validators.required);
  persons = new FormControl('', Validators.required);

  pays0= new FormControl('', Validators.required);
  pays1= new FormControl('', Validators.required);
  pays2= new FormControl('', Validators.required);
  pays3= new FormControl('', Validators.required);
  pays4= new FormControl('', Validators.required);
  pays5= new FormControl('', Validators.required);

  teams1F= new FormControl('', Validators.required);
  teams1S= new FormControl('', Validators.required);
  teams1R= new FormControl('', Validators.required);
  teams1C= new FormControl('', Validators.required);
  teams1A= new FormControl('', Validators.required);
  teams1P= new FormControl('', Validators.required);

  teams2F= new FormControl('', Validators.required);
  teams2S= new FormControl('', Validators.required);
  teams2R= new FormControl('', Validators.required);
  teams2C= new FormControl('', Validators.required);
  teams2A= new FormControl('', Validators.required);
  teams2P= new FormControl('', Validators.required);

  persons1F= new FormControl('', Validators.required);
  persons1S= new FormControl('', Validators.required);
  persons1R= new FormControl('', Validators.required);
  persons1C= new FormControl('', Validators.required);
  persons1A= new FormControl('', Validators.required);
  persons1P= new FormControl('', Validators.required);

  persons2R= new FormControl('', Validators.required);
  persons2A= new FormControl('', Validators.required);
  persons2F= new FormControl('', Validators.required);
  persons2S= new FormControl('', Validators.required);
  persons2P= new FormControl('', Validators.required);
  persons2C= new FormControl('', Validators.required);
  
  constructor(private catService: CatService,
              private formBuilder: FormBuilder,
              public toast: ToastComponent) { }

  ngOnInit() {
    this.getCats();
    this.addCatForm = this.formBuilder.group({
      pays0: this.pays0,
      pays1: this.pays1,
      pays2: this.pays2,
      pays3: this.pays3,
      pays4: this.pays4,
      pays5: this.pays5,
    
      teams1F: this.teams1F,
      teams1S: this.teams1S,
      teams1R: this.teams1R,
      teams1C: this.teams1C,
      teams1A: this.teams1A,
      teams1P: this.teams1P,
    
      teams2F: this.teams2F,
      teams2S: this.teams2S,
      teams2R: this.teams2R,
      teams2C: this.teams2C,
      teams2A: this.teams2A,
      teams2P: this.teams2P,
    
      persons1F: this.persons1F,
      persons1S: this.persons1S,
      persons1R: this.persons1R,
      persons1C: this.persons1C,
      persons1A: this.persons1A,
      persons1P: this.persons1P,
    
      persons2R: this.persons2R,
      persons2A: this.persons2A,
      persons2F: this.persons2F,
      persons2S: this.persons2S,
      persons2P: this.persons2P,
      persons2C: this.persons2C,
      
      pays: this.pays,
      teams: this.teams,
      persons: this.persons,
    });
  }

  getCats() {
    this.catService.getCats().subscribe(
      data => this.cats = data,
      error => console.log(error),
      () => this.isLoading = false,
    );
  }

  addCat() {
    this.catService.addCat(this.addCatForm.value).subscribe(
      (res) => {
        this.cats.push(res);
        this.addCatForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error),
    );
  }

  enableEditing(cat: Cat) {
    this.isEditing = true;
    this.cat = cat;
  }

  cancelEditing() {
    this.isEditing = false;
    this.cat = new Cat();
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the cats to reset the editing
    this.getCats();
  }

  editCat(cat: Cat) {
    this.catService.editCat(cat).subscribe(
      () => {
        this.isEditing = false;
        this.cat = cat;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error),
    );
  }

  deleteCat(cat: Cat) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.catService.deleteCat(cat).subscribe(
        () => {
          const pos = this.cats.map(elem => elem._id).indexOf(cat._id);
          this.cats.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error),
      );
    }
  }

}

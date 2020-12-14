import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Animaux } from '../../models/animaux';
import { AnimalService } from '../../services/animal.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  id: number;
  animal: Animaux;
  showAnimalForm = new FormGroup({
    name: new FormControl({value: '', disabled: true}),
    type: new FormControl({value: '', disabled: true}),
    color: new FormControl({value: '', disabled: true}),
    age: new FormControl({value: '', disabled: true}),
    details: new FormControl({value: '', disabled: true})
  })

  constructor(private service: AnimalService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getById(this.id).subscribe(data => {
      this.animal = data
    }, (error) => {
      console.log(error)
    }
    );
  }



}

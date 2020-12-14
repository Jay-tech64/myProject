import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Animaux } from '../../models/animaux';
import { AnimalService } from '../../services/animal.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: number;
  animal: Animaux;
  errorMessage: string;
  
  updatedAnimalForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    type: new FormControl('', Validators.required),
    color: new FormControl('', Validators.required),
    age: new FormControl('', [Validators.required, Validators.min(0)]),
    details: new FormControl()
  })


  constructor(private service: AnimalService, private router: Router, private route: ActivatedRoute) { }

  validation(){
    return this.updatedAnimalForm.controls;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getById(this.id).subscribe(data => {
      this.animal = data
    }, (error) => {
      console.log(error)
    }
    );
  }



  public updateAnimal(){
    if (this.updatedAnimalForm.valid){  
      this.service.update(this.id, this.updatedAnimalForm.value).subscribe(() => {
        this.router.navigateByUrl('crud')
      }, (error) => {
        console.log(error);
      }
      );
    }
    else{
      this.errorMessage="Veuillez entrer les champs demandés!";
    }

  }

}

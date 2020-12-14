import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormulaireService} from './../services/formulaire.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  animalForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    type: new FormControl('', Validators.required),
    color: new FormControl('', Validators.required),
    age: new FormControl('', [Validators.required, Validators.min(0)]),
    details: new FormControl()
  })

  errorMessage: string;

  constructor(private service: FormulaireService, private router: Router) { }

  ngOnInit(): void {
  }

  validation(){
    return this.animalForm.controls;
  }

  onSubmit(){
    if(this.animalForm.valid){
      this.service.post(this.animalForm.value).subscribe(data => {
        this.animalForm.reset();
        this.router.navigateByUrl('/crud');
      })
    }
    else{
      this.errorMessage="Veuillez entrer les champs demandés!";
    }
  }

}

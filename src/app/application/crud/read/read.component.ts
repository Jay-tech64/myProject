import { Component, OnInit } from '@angular/core';
import { AnimalService } from './../../services/animal.service';

import { Animaux } from '../../models/animaux';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  listAnimals: Array<Animaux>;
  constructor(private service: AnimalService) { }

  ngOnInit(): void {
    this.getAllAnimals();
  }

  getAllAnimals():void{
    this.service.getAll().subscribe(data => {
      this.listAnimals = data;
    }, (error) => {
      console.log(error)
    });
  }

  public delete(id: number, i:any){
    if(window.confirm('Are you sure?')){
      this.service.deleteById(id).subscribe(() =>{
        this.listAnimals.splice(i,1);
      // this.listAnimals = this.listAnimals.filter(element => element.id !== id)
        }, (error) => {
          console.log(error);
        });
      }
  }


}

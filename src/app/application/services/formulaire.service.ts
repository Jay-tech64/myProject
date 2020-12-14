import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animaux } from '../models/animaux';
import { GenericCrudService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class FormulaireService extends GenericCrudService<Animaux, number> {

  constructor(http: HttpClient) {
    super(http, "http://localhost:3000/ferme")
   }
}

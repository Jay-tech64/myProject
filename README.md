# Fullstack

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Comment faire le Router Link
[routerLink]="['/home']"   ou   routerLink="home"

# Comment faire la méthode supprimer
2 façon de supprimer

#1
<button type="button" (click)="delete(item.id)"            class="btn btn-danger">Delete</button>
+
public delete(id: number){
    if(window.confirm('Are you sure?')){
      this.service.deleteById(id).subscribe(data =>{
        this.listAnimals = this.listAnimals.filter(record => record.id !== id)
      }, (error) => {
        console.log(error);
      })
    }
  }

#2
<button type="button" (click)="delete2(item.id, i)"            class="btn btn-danger">Delete2</button>
+
public delete2(id: number, i:any){
    if(window.confirm('Are you sure?')){
      this.service.deleteById(id).subscribe(data =>{
        this.listAnimals.splice(i,1);
      }, (error) => {
        console.log(error);
      });
    }
  }

# Pour insérer une image correctement
<img [src]="['/assets/images/icon.png']" alt="avatar" class="rounded-circle mr-3" width="80">

# Pour publier sur GitHub
1) Connecter mon projet à mon répertoire GitGub distant (Remote)
git remote add origin <urlDuRepo>

2) Préparer (vérifier) les fichiers à envoyer à mon Repo GitHub (Stage)
git add .
    |----------------------------------------------------------
    | git add -A : Stage All (Nouveau + modifier, supprimer)  |
    | git add . : Stage (nouveau + modifier) SEULEMENT        |
    | git add -u : Stage (modifier, supprimer) SEULEMENT      |
    

3) Commiter les fichiers en état de Stage
git commit -m "Le message"

4) Pousser le code
git push -u origin master

|================= DÉPLOYER L'APPLICATION SUR GitHub Page =====================|

1) Modifier le fichier angular.json comme suit : 
La balise "outputPath": "dist/nomDuProjet" deviendra "outputPath": "docs/",

2) Builder le projet (Créer une image de votre application à l'instant T qui sera déployer)
ng build --prod --base-href="https://Jay-tech64.github.io/myProject/"

3) Pouser le code ( git add . && git commit -m "message" && git push)

4) Aller dans GitHub/MON_REPO/SETTINGS/GitHub Pages

5) Dans l'option source : choisir la branche master / docs et clique sur save

#  Pour créer et changer de branche
git branch <branchName>
git checkout <branchName>

# Commande pout créer un module avec les routes
ng g m MON_MODULE --route MON_MODULE --module app.module


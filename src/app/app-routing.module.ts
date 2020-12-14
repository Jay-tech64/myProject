import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './application/contact/contact.component';
import { ReadComponent } from './application/crud/read/read.component';
import { ShowComponent } from './application/crud/show/show.component';
import { UpdateComponent } from './application/crud/update/update.component';
import { ErrorComponent } from './application/error/error.component';
import { FormulaireComponent } from './application/formulaire/formulaire.component';
import { FunComponent } from './application/fun/fun.component';
import { HomeComponent } from './application/home/home.component';
import { TutorielsComponent } from './application/tutoriels/tutoriels.component';


const routes: Routes = [

  {path:'tutoriel', 
   children:[
    {path:':id', component: TutorielsComponent}
    
   ]},

  {path:'show/:id', component: ShowComponent},
  {path:'update/:id', component: UpdateComponent},
  {path:'formulaire', component: FormulaireComponent},
  {path:'crud', component: ReadComponent},
  {path:'fun', component: FunComponent},
  {path:'contact', component: ContactComponent}, 
  {path:'home', component: HomeComponent},

  {path:'', redirectTo:'/home', pathMatch: 'full'},

  { path: 'youtube', loadChildren: () => import('./theorie/youtube/youtube.module').then(m => m.YoutubeModule) },
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

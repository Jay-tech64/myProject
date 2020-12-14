import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulairesComponent } from './theorie/formulaires/formulaires.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './application/navbar/navbar.component';
import { FooterComponent } from './application/footer/footer.component';
import { HomeComponent } from './application/home/home.component';
import { TutorielComponent } from './application/tutoriel/tutoriel.component';
import { FormulaireComponent } from './application/formulaire/formulaire.component';
import { CreateComponent } from './application/crud/create/create.component';
import { ReadComponent } from './application/crud/read/read.component';
import { UpdateComponent } from './application/crud/update/update.component';
import { DeleteComponent } from './application/crud/delete/delete.component';
import { FunComponent } from './application/fun/fun.component';
import { ContactComponent } from './application/contact/contact.component';
import { ErrorComponent } from './application/error/error.component';
import { TutorielsComponent } from './application/tutoriels/tutoriels.component';
import { ReactiveComponent } from './theorie/reactive/reactive.component';
import { ShowComponent } from './application/crud/show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulairesComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    TutorielComponent,
    FormulaireComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent,
    FunComponent,
    ContactComponent,
    ErrorComponent,
    TutorielsComponent,
    ReactiveComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, //template HTML, CSS
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

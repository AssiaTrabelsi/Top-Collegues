import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpModule } from "@angular/http";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { UnCollegueComponent } from "./un-collegue/un-collegue.component";
import { CollegueService } from "./shared/service/collegue.service";
import { RouterModule, Routes } from "@angular/router";
import { CarrouselComponent } from "./carrousel/carrousel.component";
import { ClassiqueComponent } from "./classique/classique.component";
import { TableauComponent } from "./tableau/tableau.component";
import { ScorePipe } from './shared/pipe/score.pipe';
import { FiltreParNomPipe } from './shared/pipe/filtre-par-nom.pipe';
import { VotreDernierAvisComponent } from './votre-dernier-avis/votre-dernier-avis.component';
import { SiteEnLigneComponent } from './site-en-ligne/site-en-ligne.component';
import { HistoriqueComponent } from './historique/historique.component';

const appRoutes: Routes = [
  { path: "classique", component: ClassiqueComponent },
  { path: "carousel", component: CarrouselComponent },
  { path: "tableau", component: TableauComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    UnCollegueComponent,
    CarrouselComponent,
    ClassiqueComponent,
    TableauComponent,
    ScorePipe,
    FiltreParNomPipe,
    VotreDernierAvisComponent,
    SiteEnLigneComponent,
    HistoriqueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule {}

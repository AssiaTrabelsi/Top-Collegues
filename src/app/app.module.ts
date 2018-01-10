import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpModule } from "@angular/http";
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { UnCollegueComponent } from "./un-collegue/un-collegue.component";
import { CollegueService } from "./shared/service/collegue.service";
@NgModule({
  declarations: [AppComponent, UnCollegueComponent],
  imports: [BrowserModule, HttpClientModule, NgbModule.forRoot()],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule {}

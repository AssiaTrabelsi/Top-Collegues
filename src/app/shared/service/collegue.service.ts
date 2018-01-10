import { Injectable } from "@angular/core";
import { Collegue } from "../domain/collegue";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class CollegueService {
  constructor(private http: HttpClient) {}

  listerCollegues(): Promise<Collegue[]> {
    return this.http
      .get<Collegue[]>("http://localhost:8080/api/collegues")
      .toPromise();
  }
  sauvegarder(newCollegue: Collegue): Promise<Collegue[]> {
    return this.http
      .post<Collegue[]>("http://localhost:8080/api/collegues", newCollegue)
      .toPromise();
  }
  aimerUnCollegue(unCollegue: Collegue): Promise<Collegue> {
    return this.http
      .patch<Collegue>(
        "http://localhost:8080/api/collegues/" + unCollegue.pseudo,
        '{"action":"jaime"}',
        { headers: new HttpHeaders().set("content-type", "application/json") }
      )
      .toPromise();
  }
  detesterUnCollegue(unCollegue: Collegue): Promise<Collegue> {
    return this.http
      .patch<Collegue>(
        "http://localhost:8080/api/collegues/" + unCollegue.pseudo,
        '{"action":"deteste"}',
        { headers: new HttpHeaders().set("content-type", "application/json") }
      )
      .toPromise();
  }
}

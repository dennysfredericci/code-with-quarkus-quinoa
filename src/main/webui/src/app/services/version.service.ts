import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  private versionUrl = 'http://localhost:8080/version';

  constructor(private http: HttpClient) { }

  getVersion(): Observable<any> {
    return this.http.get(this.versionUrl);
  }

}

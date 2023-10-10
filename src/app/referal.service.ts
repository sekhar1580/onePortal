import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReferalService {
  configUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getResponse() {
    return this.http.get<string>(this.configUrl);
  }


}

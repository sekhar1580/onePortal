import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReferalService {
  configUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getResponse(payload : any) {
    return this.http.post<string>(this.configUrl, payload);
  }


}

import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {parseJson} from '@angular/cli/src/utilities/json-file';

const baseUrl = 'http://85.214.40.240:3000';

@Injectable({
  providedIn: 'root'
})

export class LoginServiceService {

  constructor(private http: HttpClient) {}

  sendBody(usuari: string, contrasenya: string): Observable<any> {
    const body = JSON.stringify({ usuari, contrasenya });
    console.log(body);

    return this.http.post(`${baseUrl}/login` , body, {
      headers: { 'Content-Type': 'application/json' }
    });

  }
}

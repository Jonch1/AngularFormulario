import { Component } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {LoginServiceService} from './services/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = "primerFormulario";
  usuari: string = '';
  contrasenya: string = '';

  onlogin(): void {
    if (this.usuari && this.contrasenya) {
      this.loginService.sendBody(this.usuari, this.contrasenya).subscribe({
        next: (response: any): void => {
          console.log("Login success", response);
        },
        error: (): void => {
          console.log("Login failed", HttpResponse);
        }
      });
    } else {
      console.error("Username or password is empty");
    }
  }

  constructor(private loginService: LoginServiceService) {}
}

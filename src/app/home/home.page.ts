import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
//import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) { }

  login(email: string, password: string) {
    this.authService.login(email, password)
      .then(() => {
        console.log('Login bem-sucedido');
        // Redirecionar para a próxima página após o login
        this.router.navigate(['/login']);

      })
      .catch(error => {
        console.error('Erro de login:', error);
      });

    irParaRegistro() {
      this.router.navigate(['/registro']);

    }

  }
}

import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(private authService: AuthService) {}

  login(email: string, password: string) {
    this.authService.login(email, password)
      .then(() => {
        console.log('Login bem-sucedido');
        // Redirecionar para a próxima página após o login
      })
      .catch(error => {
        console.error('Erro de login:', error);
      });
  }
}

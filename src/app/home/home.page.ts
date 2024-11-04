import {Injectable} from '@angular/core';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
//import {signInWithEmailAndPassword} from '@angular/fire/compat/auth';
//import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

@Injectable({
  providedIn: 'root'
})

export class HomePage {
  email: string;
  password: string;
  errorMessage: string;

  constructor(private authService: AuthService,
     private router: Router,
  //private alertCtrl: AlertController
  ) { }

  async login(email: string, password: string) {
    try {
      await this.authService.signInWithEmailAndPassword(email, password);
      console.log('Login bem-sucedido!');
      this.errorMessage = ''; // Limpa a mensagem de erro em caso de sucesso
    } catch (error) {
      this.errorMessage = 'Credenciais de login inválidas. Tente novamente.';
    }
  }
  irParaRegistro() {
    this.router.navigate(['/registro']); // Altere '/registro' para o caminho correto da página de registro
  }
}

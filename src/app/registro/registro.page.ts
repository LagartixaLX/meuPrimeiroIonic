import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import {FirebaseError} from 'firebase/app';
//import { AngularFireAuth } from '@angular/fire/compat/auth';
//import { Router } from '@angular/router';
//import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  async registrar() {
    try {
      await this.authService.signInWithEmailAndPassword(this.email, this.password);
      console.log('Login bem-sucedido!');
      this.errorMessage = ''; // Limpa a mensagem de erro em caso de sucesso
    } catch (error) {
      if (error instanceof FirebaseError) {
        this.errorMessage = error.message; // Exibe a mensagem de erro específica para o usuário
      } else {
        this.errorMessage = 'Ocorreu um erro desconhecido. Tente novamente mais tarde.';
      }
    }
  }
}
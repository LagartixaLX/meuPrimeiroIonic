import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { FirebaseError } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth) {}

  async signInWithEmailAndPassword(email: string, password: string): Promise<void> {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      console.log('Login realizado com sucesso!');
    } catch (error) {
      if (error instanceof FirebaseError) {
        // Tratar erros específicos do Firebase
        if (error.code === 'auth/invalid-email') {
          console.error('Email inválido. Por favor, verifique o email inserido.');
        } else if (error.code === 'auth/user-not-found') {
          console.error('Usuário não encontrado. Por favor, verifique o email.');
        } else if (error.code === 'auth/wrong-password') {
          console.error('Senha incorreta. Tente novamente.');
        } else {
          console.error('Erro ao fazer login:', error.message);
        }
      } else {
        // Tratar outros erros
        console.error('Erro desconhecido ao fazer login:', error);
      }
      throw error; // Repassa o erro para o componente, caso seja necessário exibir ao usuário
    }
  }
}

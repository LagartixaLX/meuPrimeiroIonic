import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {

  email: string;
  senha: string;

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  registrar() {
    this.afAuth.createUserWithEmailAndPassword(this.email, this.senha)
      .then(() => {
        console.log('Usuário registrado com sucesso!');
        // Redirecionar para outra página após o registro (opcional)
        this.router.navigate(['/outra-pagina']);
      })
      .catch(error => {
        console.error('Erro ao registrar usuário:', error);
      });
  }

}

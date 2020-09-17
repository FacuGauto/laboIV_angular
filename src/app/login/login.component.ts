import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Usuario } from '../clases/usuario';
import { AuthService} from '../servicios/auth.service';
import {firestore} from 'firebase';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registro = false;
  usuario = new Usuario();

  constructor(private route: Router,
              private authService: AuthService,
              private db: AngularFirestore) { }

  ngOnInit(): void {
    //this.usuario.nombre = 'admin';
    //this.usuario.clave = '1234';
  }

  Ingresar() {
    console.log(this.usuario);

    this.authService.signIn(this.usuario).then(res => {
      console.log('Login exitoso', res);

      this.db.collection('pruebas').add({
          email: this.usuario.email,
          fechaacceso: firestore.Timestamp.fromDate(new Date()),
          dato: 'dato de prueba'
      })
      .then(docRef => {
        localStorage.setItem('usuario', JSON.stringify(this.usuario));
       // this.miservicio.usuario = this.usuario;
        this.route.navigate(['home']);
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(error => {
          console.error('Error adding document: ', error);
      });
    }).catch(error => {
      console.log('Login error: ', error);
      this.route.navigate(['error']);
    });

    /*if (this.usuario.nombre === 'admin' && this.usuario.pass === '1234') {
      localStorage.setItem('usuario', JSON.stringify(this.usuario));
      this.route.navigate(['home']);
    } else {
      this.route.navigate(['error']);
    }*/
  }

  Registrar() {
    console.log(this.usuario);
    this.authService.register(this.usuario).then(res => {
      console.log('Registro exitoso', res);
      this.db.collection('usuarios').add({
          email: this.usuario.email,
          nombre: this.usuario.nombre
      })
      .then(docRef => {
        localStorage.setItem('usuario', JSON.stringify(this.usuario));
   //     this.miservicio.usuario = this.usuario;
        this.route.navigate(['home']);
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(error => {
          console.error('Error adding document: ', error);
      });
    }).catch(error => {
      console.log('Registro error: ', error);
      this.route.navigate(['error']);
    });
  }

}

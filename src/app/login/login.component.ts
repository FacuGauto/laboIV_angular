import { Component, OnInit } from '@angular/core';
import { Usuario } from '../clases/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = "Login";
  usuario = new Usuario();

  constructor(private route: Router) { }

  ngOnInit(): void {
    //this.usuario.nombre = 'admin';
    //this.usuario.clave = '1234';
  }

  Ingresar() {
    console.log(this.usuario);

    if (this.usuario.nombre === 'admin' && this.usuario.clave === '1234') {
      this.route.navigate(['home']);
    } else {
      this.route.navigate(['error']);
    }
  }

}

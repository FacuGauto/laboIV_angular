import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {

  @Input() pais = {name: '', capital: ''};

  constructor() { }

  ngOnInit(): void {
    let user = localStorage.getItem('usuario');
    console.log("Usuario desde localstorage");
    console.log(user);
  }

}

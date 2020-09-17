import { Component, Input, OnInit } from '@angular/core';
import { UsuarioEntidad } from '../clases/usuario-entidad';

@Component({
  selector: 'app-detalle-entidad',
  templateUrl: './detalle-entidad.component.html',
  styleUrls: ['./detalle-entidad.component.css']
})
export class DetalleEntidadComponent implements OnInit {

  @Input() entidad: UsuarioEntidad;

  constructor() { }

  ngOnInit(): void {
  }

}

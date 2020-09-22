import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsuarioEntidad } from '../clases/usuario-entidad';

@Component({
  selector: 'app-boton-entidad',
  templateUrl: './boton-entidad.component.html',
  styleUrls: ['./boton-entidad.component.css']
})
export class BotonEntidadComponent implements OnInit {

  @Input() entidadUsuario: UsuarioEntidad;
  @Output() usuarioBorrado = new EventEmitter<UsuarioEntidad>();

  constructor() { }

  ngOnInit(): void {
  }

  borrarEntidad() {
    this.usuarioBorrado.emit(this.entidadUsuario);
    console.log('boton-detalle');
  }

}

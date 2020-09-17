import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsuarioEntidad } from '../clases/usuario-entidad';

@Component({
  selector: 'app-listado-entidad',
  templateUrl: './listado-entidad.component.html',
  styleUrls: ['./listado-entidad.component.css']
})
export class ListadoEntidadComponent implements OnInit {

  @Input() listadoEntidades: UsuarioEntidad[] = [];
  @Output() emitirVerEntidad: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  VerEntidad(entidad) {
    this.emitirVerEntidad.emit(entidad);
  }

}

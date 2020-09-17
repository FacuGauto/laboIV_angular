import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-grilla-paises',
  templateUrl: './grilla-paises.component.html',
  styleUrls: ['./grilla-paises.component.css']
})
export class GrillaPaisesComponent implements OnInit {

  @Input() listadoPaises = [];
  @Output() emitirVerPais: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  VerPais(pais) {
    this.emitirVerPais.emit(pais);
  }

}

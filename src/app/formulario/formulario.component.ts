import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Calculo edades';

  public edadUno;
  public edadDos;
  public resultadoPromedio;
  public resultadoSuma;

  promedio() {
    this.resultadoPromedio = (Number(this.edadUno) + Number(this.edadDos))/2;
  }

  suma() {
    this.resultadoSuma = (Number(this.edadUno) + Number(this.edadDos));
  }

  calcular() {
    this.suma();
    this.promedio();
  }

  limpiar() {
    this.edadUno = "";
    this.edadDos = "";
    this.resultadoPromedio = "";
    this.resultadoSuma = "";
  }
}

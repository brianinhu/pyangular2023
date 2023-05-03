import { Component } from '@angular/core';
import { Curso } from 'src/app/modelo/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  cursos!: Curso[];

  constructor() {
    this.cursos = [
    { codigo: 'IS001', nombre: 'Lenguaje de programación', horasTeoricas: 3, horasPracticas: 3, costo: 150 }, 
    { codigo: 'IS002', nombre: 'Investigación Operativa II', horasTeoricas: 2, horasPracticas: 4, costo: 300 }, 
    { codigo: 'IS003', nombre: 'Métodos numéricos', horasTeoricas: 1, horasPracticas: 4, costo: 350 }, 
    { codigo: 'IS004', nombre: 'Gestión de Base de Datos', horasTeoricas: 2, horasPracticas: 2, costo: 200 }, 
    { codigo: 'IS005', nombre: 'Teoría General de Sistemas', horasTeoricas: 3, horasPracticas: 1, costo: 450 } ]
  }
}

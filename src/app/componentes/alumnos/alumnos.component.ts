import { Component } from '@angular/core';
import { Alumno } from 'src/app/modelo/alumno';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {
  alumnos!: Alumno[];

  constructor() {
    this.alumnos = [
    { codigo: 1, nombre: 'Ana', apellido: 'Perez', carrera: 'Ing. de Sistemas' }, 
    { codigo: 2, nombre: 'Juan', apellido: 'Correa', carrera: 'Ing. Mecánica y Eléctrica' }, 
    { codigo: 3, nombre: 'Roberto', apellido: 'Cupe', carrera: 'Administración de Empresas' }, 
    { codigo: 4, nombre: 'Carlos', apellido: 'Mark', carrera: 'Ing. Electrónica y Telecomunicaciones' }, 
    { codigo: 5, nombre: 'Sofia', apellido: 'Mendoza', carrera: 'Ing. Ambiental' }]
  }
}

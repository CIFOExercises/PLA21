import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent implements OnInit {
  public usuario: Usuario;
  paises = [
    { codigo: 'ES', nombre: 'España' },
    { codigo: 'AR', nombre: 'Argentina' },
    { codigo: 'UK', nombre: 'Reino Unido' },
  ];

  constructor() {
    this.usuario = {
      nombre: null,
      apellido: null,
      correo: null,
      pais: '',
      genero: '',
      adulto: false,
    };
  }

  ngOnInit(): void {}

  save(formulario: NgForm) {
    console.log(formulario.value);
    console.log(this.usuario);
    console.log(formulario);
  }
}

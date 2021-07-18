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

  constructor() {
    this.usuario = {
      nombre: '',
      apellido: '',
      correo: '',
      pais: '',
    };
  }

  ngOnInit(): void {}

  save(formulario: NgForm) {
    console.log(formulario.value);
    console.log(this.usuario);
  }
}

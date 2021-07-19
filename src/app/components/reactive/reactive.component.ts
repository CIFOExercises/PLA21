import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent implements OnInit {
  public formulario: FormGroup;
  paises = [
    { codigo: 'ES', nombre: 'España' },
    { codigo: 'AR', nombre: 'Argentina' },
    { codigo: 'UK', nombre: 'Reino Unido' },
  ];

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      apellido: new FormControl('', Validators.required),
      correo: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ]),
      pais: new FormControl('', Validators.required),
      genero: new FormControl('', Validators.required),
      adulto: new FormControl(false),
    });
  }

  ngOnInit(): void {}

  save() {
    console.log(this.formulario.value);
    console.log(this.formulario);
  }

  reiniciar() {
    this.formulario.reset({
      nombre: '',
      apellido: '',
      correo: '',
      pais: '',
      genero: '',
      adulto: false,
    });
  }
}

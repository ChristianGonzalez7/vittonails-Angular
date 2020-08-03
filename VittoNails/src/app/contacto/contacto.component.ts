import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  nombre: string;
  apellido: string;
  consulta: string;
  envioMail: string;

  constructor() {
    this.nombre = '';
    this.apellido = '';
    this.consulta = '';
    this.envioMail = '';
   }

  ngOnInit(): void {
  }

  sendEmail () {
    this.envioMail = `mailto:vitto.nails18@gmail.com?subject=Consulta%20de%20manicura&body=Nombre:%20${this.nombre}%0AApellido:%20${this.apellido}%0A%0AConsulta:%20${this.consulta}`
    this.nombre = '';
    this.apellido = '';
    this.consulta = '';
  }

}

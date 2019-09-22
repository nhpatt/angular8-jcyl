import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  template: `
    <section class="section">
      <div class="container">
        <h1 class="title">
          Solicitud de comedor
        </h1>
        <p class="subtitle">
          Nueva solicitud
        </p>
        <div class="field">
          <label class="label">Nombre</label>
          <div class="control">
            <input
              type="text"
              class="input"
              placeholder="Nombre"
              value="{{ solicitud?.nombre }}"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Apellidos</label>
          <div class="control">
            <input
              (keyup)="actualizaApellidos(apellidos.value)"
              class="input"
              [class.is-danger]="!solicitud?.apellidos.length"
              type="text"
              #apellidos
              placeholder="Apellidos"
              value="{{ solicitud?.apellidos }}"
            />
            <p *ngIf="!solicitud?.apellidos.length" class="help is-danger">
              Los apellidos no pueden ser nulos
            </p>
          </div>
        </div>
        <app-filtro-centro></app-filtro-centro>

        <div class="control">
          <button class="button is-primary" (click)="enviar(solicitud)">
            Enviar
          </button>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {
  @Input()
  solicitud;

  constructor() {}

  ngOnInit() {}

  enviar(solicitud: any) {
    console.log(solicitud);
  }

  actualizaApellidos(apellidos: any) {
    this.solicitud.apellidos = apellidos;
  }
}

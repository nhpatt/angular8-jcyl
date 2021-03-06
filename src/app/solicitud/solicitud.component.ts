import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { Usuario } from './../usuario.service';

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
              [(ngModel)]="solicitud.nombre"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Apellidos</label>
          <div class="control">
            <input
              (keyup)="actualizaApellidos(apellidos.value)"
              class="input"
              [class.is-danger]="!solicitud?.apellidos?.length"
              type="text"
              #apellidos
              placeholder="Apellidos"
              value="{{ solicitud?.apellidos }}"
            />
            <p *ngIf="!solicitud?.apellidos?.length" class="help is-danger">
              Los apellidos no pueden ser nulos
            </p>
          </div>
        </div>

        <input appDNI />

        <app-filtro-centro>
          <h2>Filtro de centro</h2>
        </app-filtro-centro>

        <div class="field">
          <label class="label">Fecha de nacimiento</label>
          <div class="control">
            <mat-form-field>
              <input
                matInput
                [matDatepicker]="picker"
                placeholder="date"
                (dateInput)="log($event)"
              />
              <mat-datepicker-toggle
                matSuffix
                [for]="picker"
              ></mat-datepicker-toggle>
              <mat-datepicker #picker></mat-datepicker>
            </mat-form-field>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-primary" (click)="enviar(solicitud)">
              Enviar
            </button>
          </div>
          <div class="control">
            <button class="button is-danger" (click)="eliminar()">
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </section>
  `
})
export class SolicitudComponent implements OnInit {
  @Input()
  solicitud: any = {};

  @Output()
  solicitudEliminada: EventEmitter<any> = new EventEmitter();

  constructor(private route: ActivatedRoute, store: Store<Usuario>) {
    // this.route.params.subscribe(x => console.log(x));

    store.pipe(take(1)).subscribe(x => console.log(x));
  }

  ngOnInit() {}

  log($event) {
    console.log($event);
  }

  eliminar() {
    this.solicitudEliminada.emit(this.solicitud);
  }

  enviar(solicitud: any) {
    console.log(this.solicitud);

    // this.solicitudService.guardar(solicitud);
  }

  actualizaApellidos(apellidos: any) {
    if (!this.solicitud) {
      this.solicitud = {};
    }
    this.solicitud.apellidos = apellidos;
  }
}

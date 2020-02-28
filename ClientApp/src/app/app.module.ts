import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { InvitadosComponent } from './invitados/invitados.component';
import { InvitadosFormComponent } from './invitados/invitados-form/invitados-form.component';
import { InstitucionFormComponent } from './institucion/institucion-form/institucion-form.component';
import { InstitucionComponent } from './institucion/institucion/institucion.component';
import { InvitadosService } from './invitados/invitados.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    InvitadosComponent,
    InvitadosFormComponent,
    InstitucionFormComponent,
    InstitucionComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'invitados', component: InvitadosComponent },
      { path: 'invitados-agregar', component: InvitadosFormComponent },
    ])
  ],
  providers: [InvitadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

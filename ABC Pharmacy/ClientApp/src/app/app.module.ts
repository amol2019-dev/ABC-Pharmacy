import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
//import { CounterComponent } from './counter/counter.component';
//import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ListMedicinesComponent } from './list-medicines/list-medicines.component';
import { AddMedicinesComponent } from './add-medicines/add-medicines.component';
import { DetailMedicinesComponent } from './detail-medicines/detail-medicines.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ListMedicinesComponent,
    AddMedicinesComponent,
    DetailMedicinesComponent,
    NotFoundComponent
    //CounterComponent,
    //FetchDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo:'list', pathMatch: 'full' },
      { path: 'list', component: ListMedicinesComponent, pathMatch: 'full' },
      { path: 'add', component: AddMedicinesComponent },
      { path: 'detail/:id', component: DetailMedicinesComponent },
      { path: '**', component: NotFoundComponent },
      //{ path: 'counter', component: NotFoundComponent },
      //{ path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

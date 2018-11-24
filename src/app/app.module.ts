import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReparationMainComponent } from './reparation-main/reparation-main.component';
import { BrandSelectionComponent } from './reparations/brand-selection/brand-selection.component';
import { ModelSelectionComponent } from './reparations/model-selection/model-selection.component';
import { RepairSelectionComponent } from './reparations/repair-selection/repair-selection.component';
import { PriceSelectionComponent } from './reparations/price-selection/price-selection.component';
import { ConfirmSelectionComponent } from './reparations/confirm-selection/confirm-selection.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReparationMainComponent,
    BrandSelectionComponent,
    ModelSelectionComponent,
    RepairSelectionComponent,
    PriceSelectionComponent,
    ConfirmSelectionComponent,
    NotFoundComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

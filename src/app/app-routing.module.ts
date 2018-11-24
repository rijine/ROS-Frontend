import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReparationMainComponent } from './reparation-main/reparation-main.component';
import { BrandSelectionComponent } from './reparations/brand-selection/brand-selection.component';
import { ModelSelectionComponent } from './reparations/model-selection/model-selection.component';
import { RepairSelectionComponent } from './reparations/repair-selection/repair-selection.component';
import { PriceSelectionComponent } from './reparations/price-selection/price-selection.component';
import { ConfirmSelectionComponent } from './reparations/confirm-selection/confirm-selection.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: "", component: HomeComponent },

  { path: "reparatie", component: ReparationMainComponent },
  { path: "reparatie/:device/merk", component: BrandSelectionComponent },
  { path: "reparatie/:device/:brand/model", component: ModelSelectionComponent },
  { path: "reparatie/:device/:brand/:model/soort", component: RepairSelectionComponent },
  { path: "reparatie/:device/:brand/:model/:repair/pakket", component: PriceSelectionComponent },
  { path: "reparatie/:device/:brand/:model/:repair/:package/bevestig", component: ConfirmSelectionComponent },

  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroNewComponent } from './hero-new/hero-new.component';
import { PowersComponent } from './powers/powers.component';
import { NewPowerComponent } from './new-power/new-power.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroes/new', component: HeroNewComponent},
  { path: 'detail/:id', component: HeroDetailsComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'powers', component: PowersComponent},
  { path: 'powers/new', component: NewPowerComponent},
  // { path: '**', component: NotFoundComponent }
];

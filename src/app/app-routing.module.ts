import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { DashboardComponent }    from './dashboard/dashboard.component';
import { AboutComponent }        from './about/about.component';
import { BookingComponent }      from './booking/booking.component';
import { ContactComponent }      from './contact/contact.component';
import { ServiceComponent }      from './service/service.component';

import { HeroesComponent }       from './heroes/heroes.component';
import { HeroDetailComponent }   from './hero-detail/hero-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'contact',  component: ContactComponent },
  { path: 'booking',  component: BookingComponent },
  { path: 'service',  component: ServiceComponent },

  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

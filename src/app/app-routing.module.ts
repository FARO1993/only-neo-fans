import { NgModule } from '@angular/core';
import { HomeComponent } from './neo/pages/home/home.component';
import { ManagementComponent } from './neo/pages/management/management.component';
import { BenefitsComponent } from './neo/pages/benefits/benefits.component';
import { SuccessStoriesComponent } from './neo/pages/success-stories/success-stories.component';
import { AboutComponent } from './neo/pages/about/about.component';
import { ContactComponent } from './neo/pages/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';


// Importa los demás componentes

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'management', component: ManagementComponent },
  { path: 'benefits', component: BenefitsComponent },
  { path: 'success-stories', component: SuccessStoriesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: '**', redirectTo: '/home' } // Redirige a la página principal si la ruta no existe
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { CvComponent } from './cv/cv.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CvDetailsComponent } from './cv-details/cv-details.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { 
    path: '',
    component: HeaderComponent,
    children: 
    [ 
      { path: '', component: WelcomeComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'cv',
        component: CvComponent,
        children: [
          { path: ':id/cvDetails', component: CvDetailsComponent }
        ]
      } 
    ] 
  },
  { path: '**' , component:ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

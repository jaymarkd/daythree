import { MyprofileComponent } from './pages/myprofile/myprofile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 {
   path: '', component: HomeComponent
 },
 {
   path: 'my-profile', component: MyprofileComponent
 },
 {
   path: '**', component: NotFoundComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

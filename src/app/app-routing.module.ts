import { MyprofileComponent } from './pages/myprofile/myprofile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupsComponent } from './pages/groups/groups.component';

const routes: Routes = [
 {
   path: '', component: HomeComponent, children: [
    {
      path: 'home', redirectTo: ''
    }
   ]
 },
 {
   path: 'my-profile', component: MyprofileComponent
 },
 {
   path: 'groups', component: GroupsComponent
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

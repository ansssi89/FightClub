import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { PageNotFoundComponentComponent } from './Components/page-not-found-component/page-not-found-component.component';
import { HomeComponent } from './Components/home/home.component';
import { FightComponent } from './components/fight/fight.component';
import { OgsiteComponent } from './components/ogsite/ogsite.component';
import { AppfeedbackComponent } from './components/appfeedback/appfeedback.component';
import { AdminComponent } from './components/admin/admin.component';
import { NacComponent } from './components/nac/nac.component';

const routes: Routes = [{
  path: "",
  redirectTo: "/home",
  pathMatch: "full"
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'fight',
  component: FightComponent
},
{
  path: 'ogsite',
  component: OgsiteComponent
},
{
  path: 'feedback',
  component: AppfeedbackComponent
},
{
  path: 'admin',
  component: AdminComponent
},
{
  path: 'nac',
  component: NacComponent
},
{
  path: '**',
  component: PageNotFoundComponentComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

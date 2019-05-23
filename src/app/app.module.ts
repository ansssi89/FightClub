import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './Components/about/about.component';
import { HomeComponent } from './Components/home/home.component';
import { PageNotFoundComponentComponent } from './Components/page-not-found-component/page-not-found-component.component';
import { ThemeModule } from './theme/theme.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FightComponent, DialogContent, FightScene } from './components/fight/fight.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material';
import { OgsiteComponent } from './components/ogsite/ogsite.component';
import { AppfeedbackComponent } from './components/appfeedback/appfeedback.component';
import { AdminComponent } from './components/admin/admin.component';
import { NacComponent, GnomeScene } from './components/nac/nac.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    PageNotFoundComponentComponent,
    FightComponent,
    DialogContent,
    OgsiteComponent,
    FightScene,
    GnomeScene,
    AppfeedbackComponent,
    AdminComponent,
    NacComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ThemeModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule
  ],
  entryComponents: [
    DialogContent,
    FightScene,
    GnomeScene
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

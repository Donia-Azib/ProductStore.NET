import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SerieComponentComponent } from './components/serie-component/serie-component.component';
import { EpreuvelistComponentComponent } from './components/epreuvelist-component/epreuvelist-component.component';
import { StartQuestionComponentComponent } from './components/start-question-component/start-question-component.component';
import { SecondParentComponentComponent } from './components/second-parent-component/second-parent-component.component';
import { StatComponentComponent } from './components/stat-component/stat-component.component';
import { ProgressComponentComponent } from './components/progress-component/progress-component.component';
import { SecondCardComponentComponent } from './components/second-card-component/second-card-component.component';
import { ThirdCardComponentComponent } from './components/third-card-component/third-card-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SerieComponentComponent,
    EpreuvelistComponentComponent,
    StartQuestionComponentComponent,
    SecondParentComponentComponent,
    StatComponentComponent,
    ProgressComponentComponent,
    SecondCardComponentComponent,
    ThirdCardComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { WelcomeToTestComponent } from './welcome-to-test/welcome-to-test.component';
import { FinishTestComponent } from './finish-test/finish-test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MainPageComponent,
    AddQuestionComponent,
    WelcomeToTestComponent,
    FinishTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

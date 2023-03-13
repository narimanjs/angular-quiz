import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { WelcomeToTestComponent } from './welcome-to-test/welcome-to-test.component';
import { FinishTestComponent } from './finish-test/finish-test.component';

const routes: Routes = [
  { path: ' ', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { path: 'addQuestion', component: AddQuestionComponent },
  { path: 'welcome', component: WelcomeToTestComponent },
  { path: 'test', component: TestComponent },
  { path: 'finish', component: FinishTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

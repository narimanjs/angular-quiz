import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddQuestionComponent } from './add-question/add-question.component';

const routes: Routes = [
  { path: ' ', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { path: 'addQuestion', component: AddQuestionComponent },
  { path: 'test', component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
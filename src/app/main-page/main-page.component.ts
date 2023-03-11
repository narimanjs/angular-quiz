import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(public router: Router) {
  }

  ngOnInit(): void {
  }
  addQuestion() {
    this.router.navigate(['../addQuestion'])
  }
  goToTest() {
    this.router.navigate(['../test'])
  }
  goToQuestions() {
    this.router.navigate(['../questions'])
  }
  finishTest() {
    console.log('finish');

  }


}

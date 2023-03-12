import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-to-test',
  templateUrl: './welcome-to-test.component.html',
  styleUrls: ['./welcome-to-test.component.scss']
})
export class WelcomeToTestComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToTest() {
    this.router.navigate(['../test'])
  }

}

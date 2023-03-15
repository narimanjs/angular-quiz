import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-to-test',
  templateUrl: './welcome-to-test.component.html',
  styleUrls: ['./welcome-to-test.component.scss']
})
export class WelcomeToTestComponent implements OnInit {

  @ViewChild('name') nameKey!: ElementRef
  constructor() { }

  ngOnInit(): void {
  }
  goToTest() {
    localStorage.setItem("name", this.nameKey.nativeElement.value);
  }

}

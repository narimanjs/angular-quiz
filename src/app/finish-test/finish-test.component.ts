import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finish-test',
  templateUrl: './finish-test.component.html',
  styleUrls: ['./finish-test.component.scss']
})
export class FinishTestComponent implements OnInit {

  constructor() { }

  public name: string | null = "";
  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
  }
}

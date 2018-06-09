import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  featureOn = false;


  constructor() { }

  ngOnInit() {
  }

  toggleFeature() {
    this.featureOn = !this.featureOn;
  }
}

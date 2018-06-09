import {Component, OnInit} from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/concat';
import {ToggleFeatureService} from '../toggle-feature.service';


@Component({
  selector: 'app-toggle-feature',
  templateUrl: './toggle-feature.component.html',
  styleUrls: ['./toggle-feature.component.css']
})
export class ToggleFeatureComponent implements OnInit {

  constructor(private toggleFeatureService: ToggleFeatureService) { }

  ngOnInit() {
  }

  public toggleFeature() {
    this.toggleFeatureService.toggleFeature();
  }
}

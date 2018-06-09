import {Directive, ElementRef, OnInit} from '@angular/core';
import {ToggleFeatureService} from './toggle-feature.service';

@Directive({
  selector: '[appToggleFeature]'
})
export class ToggleFeatureDirective implements OnInit {

  constructor(private el: ElementRef,
              private toggleFeatureService: ToggleFeatureService) {
  }

  ngOnInit(): void {
    this.toggleFeatureService.observeFeatureChanged()
      .subscribe((featureOn: boolean) => {
        console.log('feature on:', featureOn);
        if (featureOn) {
          this.el.nativeElement.style.display = 'inline';
        } else {
          this.el.nativeElement.style.display = 'none';
        }
      });
  }
}

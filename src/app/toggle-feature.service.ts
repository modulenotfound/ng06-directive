import {EventEmitter, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ToggleFeatureService {

  public featureOn = true;
  private featureChange$ = new EventEmitter<boolean>();

  constructor() { }

  public observeFeatureChanged(): Observable<boolean> {
    return Observable.of(this.featureOn)
      .concat(this.featureChange$.asObservable());
  }

  public toggleFeature() {
    this.featureOn = !this.featureOn;
    this.featureChange$.emit(this.featureOn);
  }
}

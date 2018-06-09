import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleFeatureComponent } from './toggle-feature.component';

describe('ToggleFeatureComponent', () => {
  let component: ToggleFeatureComponent;
  let fixture: ComponentFixture<ToggleFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

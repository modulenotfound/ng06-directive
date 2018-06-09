import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ToggleFeatureDirective } from './toggle-feature.directive';
import { ExampleComponent } from './example/example.component';
import { ToggleFeatureComponent } from './toggle-feature/toggle-feature.component';
import {ToggleFeatureService} from './toggle-feature.service';


@NgModule({
  declarations: [
    AppComponent,
    ToggleFeatureDirective,
    ExampleComponent,
    ToggleFeatureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ToggleFeatureService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

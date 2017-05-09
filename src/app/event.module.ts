import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormioResource, FormioResourceRoutes, FormioResourceConfig, FormioResourceService, FormioResourceViewComponent } from 'ng2-formio/resource';

@Component({
  template: require('./event.html')
})
export class EventViewComponent extends FormioResourceViewComponent {
  constructor(service: FormioResourceService, config: FormioResourceConfig) {
    super(service, config);
  }
}

@NgModule({
  imports: [
    FormioResource,
    RouterModule.forChild(FormioResourceRoutes({
      view: EventViewComponent
    }))
  ],
  providers: [
    FormioResourceService,
    {provide: FormioResourceConfig, useValue: {
      name: 'event',
      form: 'event'
    }}
  ],
  declarations: [
    EventViewComponent
  ]
})
export class EventResource {}

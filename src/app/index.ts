import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormioAppConfig } from 'ng2-formio';
import { FormioAuthService, FormioAuthConfig } from 'ng2-formio/auth';
import { AuthConfig, AppConfig } from './config';
import { routing } from './routes';

import {HomeComponent} from './home';
import {MainComponent} from './main';
import {HeaderComponent} from './header';
import {TitleComponent} from './title';
import {FooterComponent} from './footer';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    HomeComponent,
    MainComponent,
    HeaderComponent,
    TitleComponent,
    FooterComponent
  ],
  providers: [
    FormioAuthService,
    {provide: FormioAppConfig, useValue: AppConfig},
    {provide: FormioAuthConfig, useValue: AuthConfig}
  ],
  bootstrap: [MainComponent]
})
export class AppModule {}

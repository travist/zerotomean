import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'auth',
    loadChildren: 'es6-promise-loader?,[name]!./auth.module#AuthModule'
  }
];
export const routing = RouterModule.forRoot(routes);

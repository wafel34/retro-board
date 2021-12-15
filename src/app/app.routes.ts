import { Route } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout/layout.component';
import { HOME_ROUTES } from './modules/home/home.routes';

export const APP_ROUTES: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: HOME_ROUTES
  }
];

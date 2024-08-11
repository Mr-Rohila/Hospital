import { Routes } from '@angular/router';
import { BaseTemplateComponent } from './modules/shared/Components/base-template/base-template.component';
import { authGuard } from './helper/guard/src/app/helper/guard/auth.guard';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule)
    },
    {
        path: 'auth',
        loadChildren: () => import('./modules/authorization/authorization.module').then(m => m.AuthorizationModule)
    },
    {
        path: 'super',
        component: BaseTemplateComponent,
        canActivate: [authGuard],
        loadChildren: () => import('./modules/super-admin/super-admin.module').then(m => m.SuperAdminModule)
    }
];

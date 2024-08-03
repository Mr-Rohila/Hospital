import { Routes } from '@angular/router';
import { protecteLinkGuard } from './helper/guard/protecte-link.guard';
import { BaseTemplateComponent } from './modules/shared/components/base-template/base-template.component';

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
        canActivate: [protecteLinkGuard],
        loadChildren: () => import('./modules/super-admin/super-admin.module').then(m => m.SuperAdminModule)
    }

];

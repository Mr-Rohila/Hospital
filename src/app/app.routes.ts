import { Routes } from '@angular/router';
import { protecteLinkGuard } from './helper/guard/protecte-link.guard';

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
        canActivate: [protecteLinkGuard],
        loadChildren: () => import('./modules/super-admin/super-admin.module').then(m => m.SuperAdminModule)
    }

];

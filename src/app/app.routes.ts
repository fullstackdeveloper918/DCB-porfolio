import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : '',
        loadChildren : () => import('../app/components/layout-module').then((m) => m.LayoutModule)
    }
];

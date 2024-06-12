import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLayoutComponent } from './page-layout.component';

const routes: Routes = [
    {
        path: 'stepper',
        component: PageLayoutComponent,
        // children: [
        //   {
        //     path: 'stepper',
        //     loadChildren: () => import('./../page-layout/stepper/stepper.module')
        //     .then((m) => m.StepperModule)
        //   },
        //   {
        //     path: '',
        //     redirectTo: 'stepper',
        //     pathMatch: 'full'
        //   },
        // ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageLayoutRoutingModule { }

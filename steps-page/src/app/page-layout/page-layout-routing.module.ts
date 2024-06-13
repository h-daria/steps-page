import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLayoutComponent } from './page-layout.component';

const routes: Routes = [
    {
        path: '',
        component: PageLayoutComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageLayoutRoutingModule { }

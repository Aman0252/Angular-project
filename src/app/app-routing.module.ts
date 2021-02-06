import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { HomeComponent } from './home/home.component';
import {EDComponent} from './ed/ed.component';
import { CdComponent } from './cd/cd.component';
import { ProgressComponent } from './progress/progress.component';
import {VscComponent} from './vsc/vsc.component';
import {NjComponent}  from './nj/nj.component';
import {BsComponent} from './bs/bs.component';
const routes: Routes = [{
  path:'home',
  component:HomeComponent,
},
{
 path:'button',
 component:ButtonComponent,
},
{
  path:'ed',
  component:EDComponent,
},
{
  path:'cd',
  component:CdComponent,
},
{
  path:'progress',
  component:ProgressComponent,
},
{path:'vsc',
component:VscComponent,},
{
  path:'nj',
  component:NjComponent,
},
{
  path:'bs',
  component:BsComponent,
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

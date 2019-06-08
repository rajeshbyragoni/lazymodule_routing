import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {LoginComponent} from './login-pages/login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ListComponent} from './table-pages/list/list.component';
import {FormComponent} from './form-pages/form/form.component';

const routes: Routes = [

{
	path: '',
	loadChildren: './dashboard/dashboard.module#DashboardModule'
},

{
	path: 'table',
	loadChildren: './table/table.module#TableModule'
},

{
	path: 'form',
	loadChildren: './form/form.module#FormModule'
},




];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

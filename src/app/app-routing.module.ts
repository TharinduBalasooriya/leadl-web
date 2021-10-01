import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { SignUpComponent } from './sign-up/sign-up.component';

import { HomeComponent } from './home/home.component';
import {AlarmsComponent} from './component/alarms/alarms.component'
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LogsComponent } from './component/logs/logs.component'
import { ShowLogsComponent } from './component/show-logs/show-logs.component';
import {LoglistComponent} from "./component/loglist/loglist.component";
import { UploadScriptComponent } from './component/upload-script/upload-script.component';
import { DislplayResultComponent } from './component/dislplay-result/dislplay-result.component';
import { DebugEnvComponent } from './component/debug-env/debug-env.component';
import { CreateProjectComponent } from './component/create-project/create-project.component';

import { AceEditorComponent } from './component/ace-editor/ace-editor.component';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DisplayScriptComponent } from './component/display-script/display-script.component';
import {ResizableDivComponent} from "./component/resizable-div/resizable-div.component";

import { DisplayJsonResultComponent } from './component/display-json-result/display-json-result.component';
import { LDALEditorComponent } from './component/ldaleditor/ldaleditor.component';
import { LDALscriptListComponent } from './component/ldalscript-list/ldalscript-list.component';
import { DisplayLDALresultComponent } from './component/display-ldalresult/display-ldalresult.component';
import { ProjetJsonsComponent } from './component/projet-jsons/projet-jsons.component';
import { CreateCustomJsonComponent } from './component/create-custom-json/create-custom-json.component';
import { DisplayCostomJsonResltComponent } from './component/display-costom-json-reslt/display-costom-json-reslt.component';


const routes: Routes = [

    { path: '', pathMatch: 'full', redirectTo: 'login' },

    { path: 'login', component: LoginComponent},

    { path: 'sign-up', component: SignUpComponent },

    {path:'home',component:HomeComponent},

    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'logs', component: LogsComponent },
    { path: 'alarms', component: AlarmsComponent },
    { path: 'showlogs/:id', component: ShowLogsComponent },
    {path:'logList/:id',component:LoglistComponent},
    {path:'uploadScript/:id',component: UploadScriptComponent },
    {path:'displayResult/:id',component: DislplayResultComponent },
    {path:'playground/:id',component:DebugEnvComponent  },
    {path:'createProject',component: CreateProjectComponent },
    {path:'forgotPassword',component: ForgotPasswordComponent},
    {path:'displayScript/:id',component: DisplayScriptComponent },
    {path:'displayJsonResult/:id',component:DisplayJsonResultComponent },
  { path: 'test', component: AceEditorComponent },
  { path: 'ldalPlay/:id', component: LDALEditorComponent },
  { path: 'ldalScriptList/:id', component: LDALscriptListComponent },
  { path: 'ldalScript/:id', component: LDALscriptListComponent },
  {path:'displayLDALResult/:id',component:  DisplayLDALresultComponent},
  {path:'projectJsons/:id',component: ProjetJsonsComponent},
  {path:'createCustomJson/:id',component: CreateCustomJsonComponent},
  {path:'dipalyCustomJson/:id',component: DisplayCostomJsonResltComponent},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

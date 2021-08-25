import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { LogoComponent } from './logo/logo.component';

import { MatSliderModule } from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import{MatListModule} from '@angular/material/list'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import { SideNavComponentComponent } from './side-nav-component/side-nav-component.component';
import { DashboardComponent } from './component/dashboard/dashboard.component'
import { AlarmsComponent } from './component/alarms/alarms.component'
import { LogsComponent } from './component/logs/logs.component';
import {SideListItemComponent} from './component/side-list-item/side-list-item.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBarloglistComponent } from './component/nav-barloglist/nav-barloglist.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RightNavbarComponent } from './right-navbar/right-navbar.component';
import { RegularItemComponent } from './nav-bar/regular-item/regular-item.component';
import { SingleTableProjectComponent } from './component/logs/single-table-project/single-table-project.component';
import { ShowLogsComponent } from './component/show-logs/show-logs.component';
import { LoglistComponent } from './component/loglist/loglist.component';
import {SocketService}from'./service/socket.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UploadScriptComponent } from './component/upload-script/upload-script.component';
import { DislplayResultComponent } from './component/dislplay-result/dislplay-result.component';
import { DebugEnvComponent } from './component/debug-env/debug-env.component';
import { CreateProjectComponent } from './component/create-project/create-project.component';
import { AceEditorComponent } from './component/ace-editor/ace-editor.component';
import { AceEditorModule } from 'ng2-ace-editor';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DisplayScriptComponent } from './component/display-script/display-script.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import{JwtInterceptor}from './jwt.interceptor';
import { ResizableDivComponent } from './component/resizable-div/resizable-div.component'
import { ResizableModule } from 'angular-resizable-element';

import { ResizableComponent } from './component/resizable/resizable.component';
import { DragDirective } from './component/resizable/drag.directive';
import { DisplayJsonResultComponent } from './component/display-json-result/display-json-result.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

import { FileUploadComponent } from './component/file-upload/file-upload.component';
import {DragDropDirective  } from './directives/drag-drop.directive';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    LogoComponent,
    SideNavComponentComponent,
    DashboardComponent,
    AlarmsComponent,
    LogsComponent,
    SideListItemComponent,
    NavBarComponent,
    NavBarloglistComponent,
    RightNavbarComponent,
    RegularItemComponent,
    SingleTableProjectComponent,
    ShowLogsComponent,
    LoglistComponent,
    UploadScriptComponent,
    DislplayResultComponent,
    DebugEnvComponent,
    CreateProjectComponent,
    AceEditorComponent,
    ForgotPasswordComponent,
    DisplayScriptComponent,

    DisplayJsonResultComponent,
    FileUploadComponent,

    ResizableDivComponent,
  
    ResizableComponent,
    DragDirective,

    SignOutComponent,
    DisplayJsonResultComponent,
    FileUploadComponent,
    DragDropDirective  ,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    AppRoutingModule,
    MatListModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    AceEditorModule,
    ResizableModule,

    AceEditorModule,
    NgxJsonViewerModule
  ],
  providers: [ {provide:HTTP_INTERCEPTORS, useClass:JwtInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

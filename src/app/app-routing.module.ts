import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { RegisterComponent } from './components/register/register.component';
import { FileComponent } from './components/file/file.component';
import { UserComponent } from './components/user/user.component';
import { LogoutGuard } from './guards/logout.guard';

const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'login', component: LoginComponent , canActivate:[LogoutGuard]},
  { path: 'register', component: RegisterComponent, canActivate: [LogoutGuard] },
  { path: 'file', component: FileComponent, canActivate: [LogoutGuard] },
  { path: 'admin/users', component: UserComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {UserLoginComponent} from "./user-login/user-login.component";
import { UserLayoutComponent } from './shared/user-layout/user-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: UserLayoutComponent, children:[
          {path: '', redirectTo: '/user/login', pathMatch: 'full'},
          {path: 'login', component: UserLoginComponent}
        ]}
    ])
  ],
  exports: [],
  declarations: [
    UserLayoutComponent
  ]
})

export class UserModule {

}

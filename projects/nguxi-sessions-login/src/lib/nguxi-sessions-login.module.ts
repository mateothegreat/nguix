import { NgModule } from '@angular/core';
import { NguxiSessionsLoginComponent } from './nguxi-sessions-login.component';
import { SessionsLoginComponent } from './sessions-login/sessions-login.component';
import { LogoutComponent } from './logout/logout.component';
import { FormComponent } from './sessions-login/form/form.component';

@NgModule({
  imports: [
  ],
  declarations: [NguxiSessionsLoginComponent, SessionsLoginComponent, LogoutComponent, FormComponent],
  exports: [NguxiSessionsLoginComponent]
})
export class NguxiSessionsLoginModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({

    imports: [

        CommonModule,
        SharedModule,
        RouterModule.forChild([

            {

                path: 'login',
                component: LoginComponent,

                children: [

                    {

                        path: '',
                        component: LoginFormComponent

                    }

                ]

            }, {

                path: 'logout',
                component: LogoutComponent

            }

        ])

    ],

    declarations: [

        LoginComponent,
        LoginFormComponent,
        LogoutComponent

    ]

})
export class LoginModule {
}

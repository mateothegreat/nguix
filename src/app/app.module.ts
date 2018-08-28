import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NguiAdminModule} from '../../projects/ngui-admin/src/lib/ngui-admin.module';
import {NgsoaApiModule} from '../../projects/ngsoa-api/src/lib/ngsoa-api.module';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { TestComponent } from './test/test.component';

@NgModule({

    declarations: [

        AppComponent,

        TestComponent

    ],

    imports: [

        CommonModule,
        HttpClientModule,
        BrowserModule,
        NguiAdminModule,
        NgsoaApiModule,
        // NgsoaApiModule.forRoot({
        //
        //     baseUrl: 'google.com'
        //
        // })

    ],

    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

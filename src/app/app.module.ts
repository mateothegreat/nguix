import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NguiAdminModule} from '../../projects/ngui-admin/src/lib/ngui-admin.module';

@NgModule({

    declarations: [

        AppComponent

    ],

    imports: [

        BrowserModule,
        NguiAdminModule,

    ],

    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

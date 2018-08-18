import {NgModule} from '@angular/core';
import {NguiAdminComponent} from './ngui-admin.component';
import {LayoutLeftToolbarComponent} from './layout-left-toolbar/layout-left-toolbar.component';
import {LayoutTopToolbarComponent} from './layout-top-toolbar/layout-top-toolbar.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

@NgModule({

    imports: [

        CommonModule,
        RouterModule.forRoot([]),

    ],

    declarations: [

        NguiAdminComponent,
        LayoutLeftToolbarComponent,
        LayoutTopToolbarComponent

    ],

    exports: [

        NguiAdminComponent

    ]

})
export class NguiAdminModule {
}

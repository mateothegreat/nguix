import { NgModule } from '@angular/core';
import { NguiAdminComponent } from './ngui-admin.component';
import { LayoutLeftToolbarComponent } from './layout-left-toolbar/layout-left-toolbar.component';
import { LayoutTopToolbarComponent } from './layout-top-toolbar/layout-top-toolbar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutLeftMenuComponent } from './layout-left-menu/layout-left-menu.component';
import { LayoutSectionHeaderComponent } from './layout-section-header/layout-section-header.component';
import { LayoutLeftSubMenuComponent } from './layout-left-sub-menu/layout-left-sub-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutLeftSectionComponent } from './layout-left-section/layout-left-section.component';
import { LayoutLeftSectionListComponent } from './layout-left-section/layout-left-section-list/layout-left-section-list.component';
import { MatButtonModule, MatMenuModule } from '@angular/material';

@NgModule({

    imports: [

        CommonModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([]),

        MatButtonModule,
        MatMenuModule
    ],

    declarations: [

        NguiAdminComponent,
        LayoutLeftToolbarComponent,
        LayoutTopToolbarComponent,
        LayoutLeftMenuComponent,
        LayoutSectionHeaderComponent,
        LayoutLeftSubMenuComponent,
        LayoutLeftSectionComponent,
        LayoutLeftSectionListComponent,

    ],

    exports: [

        NguiAdminComponent,
        LayoutLeftToolbarComponent,
        LayoutTopToolbarComponent,
        LayoutLeftMenuComponent,
        LayoutSectionHeaderComponent,
        LayoutLeftSubMenuComponent,
        LayoutLeftSectionComponent,
        LayoutLeftSectionListComponent,

    ],

    entryComponents: [

        NguiAdminComponent,
        LayoutLeftToolbarComponent,
        LayoutTopToolbarComponent,
        LayoutLeftMenuComponent,
        LayoutSectionHeaderComponent,
        LayoutLeftSubMenuComponent,
        LayoutLeftSectionComponent,
        LayoutLeftSectionListComponent,

    ]

})
export class NguiAdminModule {
}

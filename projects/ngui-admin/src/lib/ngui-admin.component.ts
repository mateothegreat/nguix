import { Component, Input, OnInit } from '@angular/core';

@Component({

    selector: 'ngui-admin',
    template: `

        <div *ngIf="isLoggedIn"
             class="ngui-main-wrapper">

            <ngui-admin-layout-top-toolbar></ngui-admin-layout-top-toolbar>

            <div class="content">

                <ngui-admin-layout-left-toolbar></ngui-admin-layout-left-toolbar>

                <ngui-admin-layout-left-menu></ngui-admin-layout-left-menu>

                <div class="content-wrapper">

                    <router-outlet></router-outlet>

                </div>

            </div>

        </div>

        <div *ngIf="!isLoggedIn">

            <router-outlet></router-outlet>

        </div>

    `,
    styleUrls: ['./ngui-admin.component.scss']
})
export class NguiAdminComponent implements OnInit {

    @Input() public isLoggedIn: boolean;

    public constructor() {

    }

    public ngOnInit() {

    }

}

import {Component, OnInit} from '@angular/core';

@Component({

    selector: 'ngui-admin',
    template: `

        <div class="ngui-main-wrapper">

            <ngui-admin-layout-top-toolbar></ngui-admin-layout-top-toolbar>

            <div class="content">

                <ngui-admin-layout-left-toolbar></ngui-admin-layout-left-toolbar>

            </div>

        </div>
    `,
    styleUrls: ['./ngui-admin.component.scss']
})
export class NguiAdminComponent implements OnInit {

    public constructor() {

    }

    public ngOnInit() {

    }

}

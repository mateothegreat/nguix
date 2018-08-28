import { Component } from '@angular/core';
import { LayoutLeftToolbarService } from '../../projects/ngui-admin/src/lib/layout-left-toolbar/layout-left-toolbar.service';
import { LayoutTopToolbarService } from '../../projects/ngui-admin/src/lib/layout-top-toolbar/layout-top-toolbar.service';
import { NgsoaApiService } from '../../projects/ngsoa-api/src/lib/ngsoa-api.service';
import { AService } from './a.service';
import { LayoutLeftMenuService } from '../../projects/ngui-admin/src/lib/layout-left-menu/layout-left-menu.service';

@Component({

    selector: 'ngui-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']

})
export class AppComponent {

    public constructor(private layoutTopToolbarService: LayoutTopToolbarService,
                       private layoutLeftToolbarService: LayoutLeftToolbarService,
                       private layoutLeftMenuService: LayoutLeftMenuService,
                       private ngsoaApiService: NgsoaApiService,
                       private a: AService) {

        ngsoaApiService.BASE_URL = 'https://google.com';

        layoutTopToolbarService.rightToolbarItems = [

            {

                label: 'Home',
                link: '/home/',
                icon: 'fas fa-home',
                color: 'yellow'

            }, {

                label: 'Home',
                link: '/home/',
                icon: 'fas fa-users',
                color: 'pink'

            }, {

                label: 'Home',
                link: '/home/',
                icon: 'fas fa-home',
                color: 'purple'

            }, {

                label: 'Home',
                link: '/home/',
                icon: 'fas fa-cog',
                color: 'grey'

            }

        ];

        layoutLeftToolbarService.menuTopItems = [

            {

                label: 'Home',
                link: '/home/',
                icon: 'fas fa-home',
                color: 'yellow'

            }, {

                label: 'Home',
                link: '/home/',
                icon: 'fas fa-users',
                color: 'pink'

            }, {

                label: 'Home',
                link: '/home/',
                icon: 'fas fa-home',
                color: 'purple'

            }, {

                label: 'Home',
                link: '/home/',
                icon: 'fas fa-cog',
                color: 'grey'

            }

        ];

        layoutLeftMenuService.title = 'CAMERAS';
        layoutLeftMenuService.items = [];

    }

}

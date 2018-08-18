import {Component} from '@angular/core';
import {LayoutLeftToolbarService} from '../../projects/ngui-admin/src/lib/layout-left-toolbar/layout-left-toolbar.service';
import {LayoutTopToolbarService} from '../../projects/ngui-admin/src/lib/layout-top-toolbar/layout-top-toolbar.service';

@Component({
    selector: 'ngui-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public constructor(private layoutTopToolbarService: LayoutTopToolbarService,
                       private layoutLeftToolbarService: LayoutLeftToolbarService) {

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

    }

}

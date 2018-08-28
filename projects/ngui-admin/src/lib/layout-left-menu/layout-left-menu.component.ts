import { Component } from '@angular/core';
import { LayoutLeftMenuService } from './layout-left-menu.service';

@Component({

    selector: 'ngui-admin-layout-left-menu',
    templateUrl: './layout-left-menu.component.html',
    styleUrls: ['./layout-left-menu.component.scss']

})
export class LayoutLeftMenuComponent {

    public constructor(public layoutLeftMenuService: LayoutLeftMenuService) {

    }

}

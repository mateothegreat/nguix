import {Component} from '@angular/core';
import {LayoutLeftToolbarService} from './layout-left-toolbar.service';

@Component({

    selector: 'ngui-admin-layout-left-toolbar',
    templateUrl: './layout-left-toolbar.component.html',
    styleUrls: ['./layout-left-toolbar.component.scss']

})
export class LayoutLeftToolbarComponent {

    public constructor(public layoutLeftToolbarService: LayoutLeftToolbarService) {

    }

}

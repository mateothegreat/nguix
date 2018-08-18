import {Component} from '@angular/core';
import {LayoutTopToolbarService} from './layout-top-toolbar.service';

@Component({

    selector: 'ngui-admin-layout-top-toolbar',
    templateUrl: './layout-top-toolbar.component.html',
    styleUrls: ['./layout-top-toolbar.component.scss']

})
export class LayoutTopToolbarComponent {

    public constructor(public layoutTopToolbarService: LayoutTopToolbarService) {

    }

}

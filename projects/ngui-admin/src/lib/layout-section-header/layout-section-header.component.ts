import { Component, Input } from '@angular/core';

@Component({

    selector: 'ngui-admin-layout-section-header',
    templateUrl: './layout-section-header.component.html',
    styleUrls: ['./layout-section-header.component.scss']

})
export class LayoutSectionHeaderComponent {

    @Input() public title: string = '---';
    @Input() public subtitle: string;
    @Input() public buttons: {

        label: string,
        link: string

    }[];

}

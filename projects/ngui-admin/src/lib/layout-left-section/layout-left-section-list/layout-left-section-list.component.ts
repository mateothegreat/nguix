import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({

    selector: 'ngui-admin-layout-left-section-list',
    templateUrl: './layout-left-section-list.component.html',
    styleUrls: ['./layout-left-section-list.component.scss']

})
export class LayoutLeftSectionListComponent {

    @Input() public title: string;

    @Input() public list: {

        title: string,
        items: {

            icon: string,
            color: string,
            title: string,
            link: string

        }[]

    }[];

    public constructor(public domSanitizer: DomSanitizer) {

    }

}

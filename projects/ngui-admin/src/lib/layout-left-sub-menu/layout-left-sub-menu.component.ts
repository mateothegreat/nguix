import { Component } from '@angular/core';
import { LayoutLeftSubMenuService } from './layout-left-sub-menu.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({

    selector: 'ngui-admin-layout-left-sub-menu',
    templateUrl: './layout-left-sub-menu.component.html',
    styleUrls: ['./layout-left-sub-menu.component.scss'],

    animations: [

        trigger('slideLeftRight', [

            transition(':enter', [

                style({ transform: 'translateX(-90%)' }),
                animate('500ms ease-in', style({ transform: 'translateX(0%)' }))

            ]),

            transition(':leave', [

                animate('400ms ease-in', style({ transform: 'translateX(-90%)' }))

            ])

        ])

    ]

})
export class LayoutLeftSubMenuComponent {

    public constructor(public layoutLeftSubMenuService: LayoutLeftSubMenuService) {

    }

}

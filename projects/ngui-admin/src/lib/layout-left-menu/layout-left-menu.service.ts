import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LayoutLeftMenuService {

    public title: string;
    public items: {

        link: string,
        label: string,
        icon: string

    }[];

    public title2: string;
    public items2: {

        link: string,
        label: string,
        icon: string

    }[];

    public reset(title?: string, items?: any): void {

        this.title = title;
        this.items = items ? items : [];

        this.title2 = '';
        this.items2 = [];

    }

}

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LayoutLeftSubMenuService {

    public title: string;
    public link: string;
    public back: string;
    public icon: string;

    public steps: {

        title: string,
        link: string,

        subs: {

            title: string,
            link: string

        }[]

    }[];

    public reset(obj?: any): void {

        this.title = obj.title;
        this.icon = obj.icon;
        this.link = obj.link;
        this.back = obj.back;
        this.steps = obj.steps;

    }

}

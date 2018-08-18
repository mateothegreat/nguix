import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LayoutLeftToolbarService {

    public menuTopItems: {

        label: string,
        link: string,
        icon: string,
        color: string

    }[];

}

import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LayoutTopToolbarService {

    public iconUrl: string;
    public iconLink: string;

    public logoImageUrl: string;
    public logoLink: string;

    public rightToolbarItems: {

        label: string,
        link: string,
        icon: string,
        color: string

    }[];

}

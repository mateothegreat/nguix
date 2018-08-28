import {Injectable} from '@angular/core';
import {APIClient} from '../../projects/ngsoa-api/src/lib/lib/APIClient';

@Injectable({
    providedIn: 'root'
})
export class AService extends APIClient<string> {

    public asdf(): any {

        return this.get('aaaaaa');

    }
}

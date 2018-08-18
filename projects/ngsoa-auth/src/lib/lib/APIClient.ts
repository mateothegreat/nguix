import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {PageRequest} from './PageRequest';
import {Injectable} from '@angular/core';
import {Pageable} from './Pageable';

@Injectable()
export class APIClient<T> {

    public BASE_URL: string;

    public constructor(private httpClient: HttpClient) {

    }

    public _getPageable<T>(url: string, dataTablePage?: any): Observable<Pageable<T>> {

        if (dataTablePage) {

            return this.httpClient.get<Pageable<T>>(`${this.BASE_URL}/${url}?${ dataTablePage.toParams() }`);

        } else {

            return this.httpClient.get<Pageable<T>>(`${this.BASE_URL}/${url}`);

        }

    }

    public get<T>(url: string): Observable<T> {

        return this.httpClient.get<T>(`${this.BASE_URL}/${url}`);

    }

    public search<T>(url: string, pageRequest: PageRequest): Observable<any> {

        return this.httpClient.get<T>(`${this.BASE_URL}/${url}?terms=${pageRequest.terms}&limit=${pageRequest.limit}&offset=${pageRequest.offset}`);

    }

    public post<T>(url: string, body?: any): Observable<T> {

        try {

            return this.httpClient.post<T>(`${this.BASE_URL}/${url}`, body);

        } catch (e) {

            console.log(e);

        }

    }

    public put<T>(url: string, body?: any): Observable<T> {

        return this.httpClient.put<T>(`${this.BASE_URL}/${url}`, body);

    }

    public delete<T>(url: string): Observable<T> {

        return this.httpClient.delete<T>(`${this.BASE_URL}/${url}`);

    }

}

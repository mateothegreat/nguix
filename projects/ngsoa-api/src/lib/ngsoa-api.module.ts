import { InjectionToken, NgModule } from '@angular/core';
import { NgsoaApiComponent } from './ngsoa-api.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpErrorInterceptor } from './lib/HttpErrorInterceptor';
import { JwtInterceptor } from './lib/JwtInterceptor';

export class NgsoaApiConfig {

    baseUrl: string;

}

export const NgsoaApiConfigService = new InjectionToken<NgsoaApiConfig>('NgsoaApiConfig');

@NgModule({

    imports: [

        CommonModule,
        HttpClientModule

    ],

    declarations: [

        NgsoaApiComponent

    ],

    exports: [

        NgsoaApiComponent

    ],

    providers: [

        {

            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true,

        }, {

            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true,

        }

    ]

})
export class NgsoaApiModule {

    // public static forRoot(config: NgsoaApiConfig): ModuleWithProviders {
    //
    //     return {
    //
    //         ngModule: NgsoaApiModule,
    //         providers: [
    //
    //             APIClient,
    //
    //             {
    //                 provide: NgsoaApiConfig,
    //                 useValue: config
    //
    //             }
    //
    //         ]
    //
    //     };
    // }

}


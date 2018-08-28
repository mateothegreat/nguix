import { Component } from '@angular/core';
import { AuthenticationService } from '@matthewdavis.io/ngsoa-api';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],


})
export class LoginComponent {

    public constructor(public authenticationService: AuthenticationService,
                       private router: Router) {

        if (authenticationService.isLoggedIn()) {

            router.navigate(['/']);

        }

    }

}

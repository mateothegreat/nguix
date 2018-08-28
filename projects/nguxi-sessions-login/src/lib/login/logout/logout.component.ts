import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@matthewdavis.io/ngsoa-api';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

    public constructor(private authenticationService: AuthenticationService,
                       private router: Router) {

        authenticationService.logout();

        router.navigate(['/']);

        location.reload();

    }

}

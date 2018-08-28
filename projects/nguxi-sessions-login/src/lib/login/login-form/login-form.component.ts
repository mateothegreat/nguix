import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '@matthewdavis.io/ngsoa-api';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

    private returnUrl: string;

    public formGroup: FormGroup = new FormGroup({

        username: new FormControl('matthew@matthewdavis.io', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
        password: new FormControl('asdfasdfasdf', [Validators.required, Validators.minLength(8)])

    });

    public constructor(private authenticationService: AuthenticationService,
                       private router: Router,
                       private route: ActivatedRoute,
                       private toastr: ToastrService) {

    }

    public ngOnInit(): void {

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    }

    public onLoginButtonClick(): void {

        this.authenticationService.login(this.formGroup.value['username'], this.formGroup.value['password']).subscribe((isLoggedIn: boolean) => {

            if (isLoggedIn) {

                this.router.navigateByUrl(this.returnUrl);

                location.reload();
                // setTimeout(() => {
                //
                //     location.reload();
                //
                // }, 200);

            } else {

                this.toastr.error('Invalid Username or Password.');

            }

        });

    }

}

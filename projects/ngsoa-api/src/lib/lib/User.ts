import { Statuses } from './Statuses';

export class User {

    public status: string = Statuses.STATUS_ACTIVE;

    public id: number;
    public email: string;
    public phone: string;
    public password: string;
    public firstname: string;
    public lastname: string;

    public street1: string;
    public street2: string;
    public city: string;
    public state: string;
    public zip: string;
    public country: string;

    public stampCreated: Date;

    public isAdmin: boolean;
    public isConfirmed: boolean;

    public constructor(obj?: any) {

        if (obj) {

            this.id = obj.id;
            this.email = obj.email;
            this.phone = obj.phone;
            this.password = obj.password;
            this.firstname = obj.firstname;
            this.lastname = obj.lastname;

            this.street1 = obj.street1;
            this.street2 = obj.street2;
            this.city = obj.city;
            this.state = obj.state;
            this.zip = obj.zip;
            this.country = obj.country;

            this.stampCreated = obj.stampCreated ? new Date(obj.stampCreated) : null;

            this.isAdmin = obj.isAdmin;
            this.isConfirmed = obj.isConfirmed;

        }

    }

}

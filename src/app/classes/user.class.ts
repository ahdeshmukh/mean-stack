export class User {
    private firstName: string;
    private lastName: string;
    private email: string;
    private id: string;
    
    constructor(id, email, firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.id = id;
    }

    getUserId() {
        return this.id;
    }
}
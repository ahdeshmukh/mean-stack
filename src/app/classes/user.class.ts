export class User {
    private firstName: string;
    private lastName: string;
    private email: string;
    private id: string;
    
    constructor(data) {
        this.firstName = data.first_name;
        this.lastName = data.last_name;
        this.email = data.email;
        this.id = data._id;
    }
}
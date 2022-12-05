import { IUserList } from "../models/IUserList";

export class UserService {
    private static users :IUserList[] = [
        {
            sno: 'AAA101',
            name: 'Rajan',
            age: 25,
            designation: 'Software Engineer',                
            company: 'Infosys'
        },
        {
            sno: 'AAA102',
            name: 'John',
            age: 35,
            designation: 'Sr.software Engineer',                
            company: 'Infosys'
        },
        {
            sno: 'AAA103',
            name: 'Wilson',
            age: 45,
            designation: 'Tech Lead',                
            company: 'Infosys'
        },
        {
            sno: 'AAA104',
            name: 'Laura',
            age: 55,
            designation: 'Project Manager',                
            company: 'Infosys'
        },
    ];

    public static getAllUsers() {
        return this.users;
    }
}
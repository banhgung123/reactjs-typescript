import React, { useState } from 'react';
import { IUserList } from '../models/IUserList';
import { UserService } from '../services/UserService';

interface IState {
    users : IUserList[];
}
interface IProps {}

let UserList:React.FC<IProps> = () => {
    const [state, setState] = useState<IState>(() => ({
        users: UserService.getAllUsers()
    }));

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h3">User List</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <table className="table table-striped text-center table-hover">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>SNO</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Designation</th>
                                    <th>Company</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    state.users.length > 0 &&
                                    state.users.map(user => (
                                        <tr key={user.sno}>
                                            <td>{user.sno}</td>
                                            <td>{user.name}</td>
                                            <td>{user.age}</td>
                                            <td>{user.designation}</td>
                                            <td>{user.company}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default UserList;
import React, { useEffect, useState } from 'react';
import { IUsers } from '../models/IUsers';
import { UsersService } from '../services/UsersService';
import {Link} from 'react-router-dom';

interface IState {
    loading : boolean;
    users : IUsers[];
    errorMessage : string;
}
interface IProps {}

let Users:React.FC<IProps> = () => {
    const [state, setState] = useState<IState>(() => ({
        loading: false,
        users: [] as IUsers[],
        errorMessage: ''
    }));

    useEffect(() => {
        setState({...state, loading: true});
        UsersService.getAllUsers().then((response) => {
            setState({
                ...state,
                loading: false,
                users: response.data,
            });
        }).catch((error) => {
            setState({
                ...state,
                loading: false,
                errorMessage: error.message,
            });
        });
    }, []);
    
    const {loading, users, errorMessage} = state;

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 fw-bold">User List</p>
                        <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ut aperiam voluptate, libero blanditiis aliquam? Cupiditate, ipsam vitae incidunt corrupti iste, fuga, dicta ad totam delectus autem eum iure sequi?</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className="table table-hover text-center table-striped">
                            <thead className="bg-success text-white">
                                <tr>
                                    <th>SNO</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Company</th>
                                    <th>Website</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.length > 0 &&
                                    users.map(user => (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>
                                                <Link to={`/contacts/${user.id}`} className="text-decoration-none text-success fw-bold">{user.name}</Link>
                                            </td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.company.name}</td>
                                            <td>{user.website}</td>
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

export default Users;
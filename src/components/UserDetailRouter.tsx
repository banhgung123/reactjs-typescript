import React, { useEffect, useState } from 'react';
import {useParams, Link} from 'react-router-dom';
import { IUsers } from '../models/IUsers';
import { UsersService } from '../services/UsersService';

interface URLParams {
    id : string;
}
interface IState {
    loading : boolean;
    user : IUsers;
    errorMessage : string;
}
interface IProps {}

let UserDetailRouter:React.FC<IProps> = () => {
    const {id} = useParams<URLParams | any>();

    const [state, setState] = useState<IState>(() => ({
        loading: false,
        user: {} as IUsers,
        errorMessage: ''
    }));

    useEffect(() => {
        if (id) {
            setState({...state, loading: true});
            UsersService.getUser(id).then((response) => {
                setState({
                    ...state,
                    loading: false,
                    user: response.data
                });
            }).catch((error) => {
                setState({
                    ...state,
                    loading: false,
                    errorMessage: error.message
                });
            });
        }
    }, [id]);

    const {loading, user, errorMessage} = state;

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success fw-bold">User Details</p>
                        <p className="fst-italic">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos vitae veniam natus iusto dicta obcaecati velit ab necessitatibus possimus saepe error cum, expedita earum beatae tempora vero esse vel? At?</p>
                    </div>
                </div>
                {
                    Object.keys(user).length > 0 &&
                    <div className="row">
                        <div className="col">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    Name : <span className="fw-bold">{user.name}</span>
                                </li>
                                <li className="list-group-item">
                                    Phone : <span className="fw-bold">{user.phone}</span>
                                </li>
                                <li className="list-group-item">
                                    Email : <span className="fw-bold">{user.email}</span>
                                </li>
                                <li className="list-group-item">
                                    Company : <span className="fw-bold">{user.company.name}</span>
                                </li>
                                <li className="list-group-item">
                                    City : <span className="fw-bold">{user.address.city}</span>
                                </li>
                                <li className="list-group-item">
                                    Zip code : <span className="fw-bold">{user.address.zipcode}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                }
                <div className="row">
                    <div className="col">
                        <Link to={'/'} className="btn btn-success mt-3">Back</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default UserDetailRouter;
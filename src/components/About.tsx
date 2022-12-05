import React, { useState } from 'react';
import {Link} from 'react-router-dom';

interface IState {
}
interface IProps {}

let About:React.FC<IProps> = () => {

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success fw-bold">About Us</p>
                        <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero placeat natus deserunt ex at quod commodi officia error quidem minima, corrupti beatae, delectus reprehenderit ipsam quibusdam est nam reiciendis sint!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ul className="list-group">
                            <li className="list-group-item">
                                App Name : <span className="fw-bold">React Router with TypeScript</span>
                            </li>
                            <li className="list-group-item">
                                Author : <span className="fw-bold">TRI CAO</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Link to={'/'} className="btn btn-success mt-3">Back</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default About;
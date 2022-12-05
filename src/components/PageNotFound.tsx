import React, { useState } from 'react';

interface IState {
    count : number;
}
interface IProps {}

let PageNotFound:React.FC<IProps> = () => {

    return (
        <React.Fragment>
            <h3>PageNotFound</h3>
        </React.Fragment>
    );
};

export default PageNotFound;
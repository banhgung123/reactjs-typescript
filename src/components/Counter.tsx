import React, { useState } from 'react';

interface IState {
    count : number;
}
interface IProps {}

let Counter:React.FC<IProps> = () => {
    const [state, setState] = useState<IState>(() => ({
        count: 0
    }));

    const incr = ():void => {
        setState({
            count: state.count + 1
        });
    };

    const decr = ():void => {
        setState({
            count: state.count - 1
        });
    };

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <p className="h3">{state.count}</p>
                                <button className="btn btn-success m-1" onClick={incr}>INCR</button>
                                <button className="btn btn-danger m-1" onClick={decr}>DECR</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Counter;
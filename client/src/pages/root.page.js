import React from 'react';
import RootRouter from './root.router';
import Slidebar from "../components/slidebar/slidebar.component";
import './root.scss';

const RootPage = (props) => {
    return (
        <div className="wrapper">
            <Slidebar />
            <div className="wrapper__container">
                <RootRouter />
            </div>
        </div>
    );
};

export default RootPage;

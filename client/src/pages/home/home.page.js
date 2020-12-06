import React from 'react';
import './home.scss';
import CustomLink from "../../components/link/custom_link.component";
import ListTask from "../../components/listtask/list_task.component";

const Home = (props) => {
    const list_task = [
        1, 2, 3, 4, 5, 6
    ];
    return (
        <div className="home">
            <button className='button home__button'>new list</button>
            <ul className='home__list'>
                {list_task && list_task.map((ele, index) =>
                    <CustomLink key={index} to={'/ok'} children={
                        <ListTask/>
                    }/>
                )}
            </ul>
        </div>
    );
};

export default Home;

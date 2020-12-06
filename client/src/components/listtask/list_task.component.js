import React from 'react';
import './listtask.scss';

const ListTask = (props) => {
    return (
        <div className='list_task'>
            <ul className='list_task--group'>
                <li>Lam bai tap toantoantoan toantoan</li>
                <li>Lam bai tap toantoantoan toantoan</li>
                <li>Lam bai tap toantoantoan toantoan</li>
                <li>Lam bai tap toantoantoan toantoan</li>
            </ul>
            <div className='list_task--info'>
                <span className='list_task--info__name'>Persional</span>
                <span className='list_task--info__location'>On this Computer</span>
            </div>
        </div>
    )
};

export default ListTask;

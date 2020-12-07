import React from 'react';
import {GoPlus} from 'react-icons/all';
import './newtask.scss';

const NewTask = (props) => {
    return <li className="task new_task">
        <GoPlus className="new_task__icon" />
        <input type='text' className='new_task__input' placeholder='New task ...' />
    </li>;
};

export default NewTask;

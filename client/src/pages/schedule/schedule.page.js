import React from 'react';
import Task from "../../components/task/task.component";
import NewTask from '../../components/newtask/newtask.component';
import './schedule.scss';

const Schedule = (props) => {
    const tasks = [...Array(5).keys()];
    return (
        <div className='schedule task__content'>
            <button className='button task__content--button'>Done({0})</button>
            <ul className='task__content--tasks'>
                {tasks.map((ele, index) =>
                    <Task key={index} />
                )}
                <NewTask />
            </ul>
        </div>
    )
};

export default Schedule;

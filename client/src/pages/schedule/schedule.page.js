import React from 'react';
import './schedule.scss';
import Task from "../../components/task/task.component";

const Schedule = (props) => {
    const tasks = [...Array(10).keys()];
    return (
        <div className='schedule'>
            <button className='button schedule__button'>Done({0})</button>
            <ul className='schedule__tasks'>
                {tasks.map((ele, index) =>
                    <Task key={index} />
                )}
            </ul>
        </div>
    )
};

export default Schedule;

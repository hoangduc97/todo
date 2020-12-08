import React from 'react';
import Task from '../../components/task/task.component';
import './schedule.scss';

const Schedule = (props) => {
    return (
        <div className="schedule task__content">
            <button className="button task__content--button">Done({0})</button>
            <ul className="task__content--tasks">
                {props.tasks &&
                    props.tasks.map((ele, index) => (
                        <Task key={index} {...ele} />
                    ))}
            </ul>
        </div>
    );
};

export default Schedule;

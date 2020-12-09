import React from 'react';
import './listtask.scss';

const ListTask = ({ tasks, title }) => {
    return (
        <div className="list_task">
            <ul className="list_task--group">
                {tasks && tasks.map((task, index) => (
                    <li key={index}>{task.title}</li>
                ))}
            </ul>
            <div className="list_task--info">
                <span className="list_task--info__name">{title}</span>
            </div>
        </div>
    );
};

export default ListTask;

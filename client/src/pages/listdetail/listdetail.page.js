import React from 'react';
import Task from '../../components/task/task.component';
import NewTask from '../../components/newtask/newtask.component';
import './listdetail.scss';

const ListDetail = (props) => {
    const handleTask = (task) => {
        const new_task = [...tasks.filter((t) => t.id != task.id), task].filter(
            (t) => !t.completed
        );
        setTasks(new_task);
        setTaskDone(new_task.filter((t) => t.completed).length);
    };

    return (
        <div className="list_detail task__content">
            <button className="button task__content--button">Done({0})</button>
            <ul className="task__content--tasks">
                {props.tasks &&
                    props.tasks
                        .filter((t) => !t.completed)
                        .map((ele, index) => {
                            return (
                                <Task
                                    key={index}
                                    {...ele}
                                    handleTask={handleTask}
                                />
                            );
                        })}
                <NewTask />
            </ul>
        </div>
    );
};

export default ListDetail;

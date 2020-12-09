import React, { useEffect } from 'react';
import Task from '../../components/task/task.component';
import NewTask from '../../components/newtask/newtask.component';
import {
    addTask,
    getAllTask,
    updateTask,
    deleteTask,
} from './listdetail.action';
import './listdetail.scss';
import { connect } from 'react-redux';

const ListDetail = (props) => {
    useEffect(() => {
        const listId = props.params['list_id']
        props.getAllTask(listId);
    }, [props.getAllTask]);

    const handleTask = (task) => {
        console.log(task);
    }
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

const mapStateToProps = ({ ListDetailReducer }) => ({
    tasks: ListDetailReducer.tasks,
});

const mapDispatchToProps = (dispatch) => ({
    getAllTask: (listId) => dispatch(getAllTask(listId)),
    addTask: (listId, task) => dispatch(addTask(listId, task)),
    updateTask: (task) => dispatch(updateTask(task)),
    deleteTask: (id) => dispatch(deleteTask(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListDetail);

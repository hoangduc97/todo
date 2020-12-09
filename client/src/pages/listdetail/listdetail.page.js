import React, {useEffect, useState} from 'react';
import Task from '../../components/task/task.component';
import NewTask from '../../components/newtask/newtask.component';
import {addTask, deleteTask, getAllTask, updateTask,} from './listdetail.action';
import {connect} from 'react-redux';
import './listdetail.scss';

const ListDetail = (props) => {
    const [showCompleted, setShowCompleted] = useState(false);
    const [updated, setUpdated] = useState(false);
    useEffect(() => {
        const listId = props.params['list_id'];
        console.log('rerender')
        props.getAllTask(listId);
    }, [props.getAllTask]);
    const handleShowCompleted = () => setShowCompleted(!showCompleted);
    const handleUpdated = () => setUpdated(!updated);

    const completedCount = props.tasks ? props.tasks.filter(t => t.completed).length : 0;
    return (
        <div className="list_detail task__content">
            <button className="button task__content--button" onClick={handleShowCompleted}>Done({completedCount})
            </button>
            <ul className="task__content--tasks">
                {showCompleted &&
                props.tasks &&
                props.tasks
                    .filter(t => t.completed)
                    .map((ele) => {
                        return (
                            <Task
                                key={ele._id}
                                {...ele}
                                updateTask={props.updateTask}
                                deleteTask={props.deleteTask}
                                updated={handleUpdated}
                            />
                        );
                    })
                }
                {props.tasks &&
                props.tasks
                    .filter(t => !t.completed)
                    .map((ele) => {
                        return (
                            <Task
                                key={ele._id}
                                {...ele}
                                updateTask={props.updateTask}
                                deleteTask={props.deleteTask}
                                updated={handleUpdated}
                            />
                        );
                    })}
                <NewTask addTask={props.addTask} listId={props.params['list_id']}/>
            </ul>
        </div>
    );
};

const mapStateToProps = ({ListDetailReducer}) => ({
    tasks: ListDetailReducer.tasks,
});

const mapDispatchToProps = (dispatch) => ({
    getAllTask: (listId) => dispatch(getAllTask(listId)),
    addTask: (listId, task) => dispatch(addTask(listId, task)),
    updateTask: (task) => dispatch(updateTask(task)),
    deleteTask: (id) => dispatch(deleteTask(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListDetail);

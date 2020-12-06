import React, {useState} from 'react';
import {BiDownArrow, BiUpArrow, GrTasks, HiCheck} from 'react-icons/all';
import './task.scss';

const Task = (props) => {
    const [completed, setCompleted] = useState(false);
    const [detail, setDetail] = useState(false);

    const toggleDetail = () => {
        setDetail(!detail);
    }
    const detail_toggle = 'task__detail' + (detail ? ' checked' : '');
    return (
        <li className='task'>
            <div className='task__line'>
                <div className='task__line--move'>
                    <GrTasks/>
                </div>
                <div className='task__line--checked'>
                    <HiCheck/>
                </div>
                <input className='task__line--input' name='task_content' type='text'/>
                <div className='task__line--detail'>
                    {detail ? <BiUpArrow onClick={toggleDetail}/>
                        : <BiDownArrow onClick={toggleDetail}/>}
                </div>
            </div>
            <div className={detail_toggle}>
                <div className='task__detail--left note'>
                    <label className='title'>Notes</label>
                    <textarea name='task_note' className='note_text'/>
                </div>
                <div className='task__detail--right'>
                    <div className='due_date'>
                        <label className='title'>Due Date</label>
                        <input className='due_date_text' type='date'/>
                    </div>
                    <div className='priority'>
                        <label className='title'>Priority</label>
                        <select className='priority_text'>
                            <option>None</option>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>
                </div>
            </div>
        </li>
    )
};

export default Task;
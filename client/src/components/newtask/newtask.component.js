import React, {useState} from 'react';
import {GoPlus} from 'react-icons/all';
import './newtask.scss';

const NewTask = ({addTask, listId}) => {
    const [title, setTitle] = useState('')
    const handleChange = (e) => setTitle(e.target.value);
    const handleAdd = () => {
        if (title !== '') {
            addTask(listId, {
                title: title,
                completed: false,
                note: "",
                priority: 0,
                due_date: "",
                list: listId,
            })
            setTitle('')
        }
    }

    return <li className="task new_task">
        <GoPlus className="new_task__icon" onClick={handleAdd}/>
        <input type='text' className='new_task__input' placeholder='New task ...' value={title}
               onChange={handleChange} onKeyDown={(e) => {
            if (e.keyCode == 13) {
                handleAdd();
            }
        }}/>
    </li>;
};

export default NewTask;

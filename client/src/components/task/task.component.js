import React, {useState} from 'react';
import {AiOutlineEdit, GrTasks, HiCheck} from 'react-icons/all';
import './task.scss';

const Task = (props) => {
    const [title, setTitle] = useState(props.title);
    const [completed, setCompleted] = useState(props.completed);
    const [note, setNote] = useState(props.note);
    const [due_date, setDueDate] = useState(props.due_date ? props.due_date.split('T')[0] : '');
    const [priority, setPriority] = useState(props.priority);
    const [detail, setDetail] = useState(false);

    const toggleDetail = () => setDetail(!detail);
    const handleCompleted = () => {
        if (detail)
            setCompleted(!completed)
    };
    const handleTitle = (e) => setTitle(e.target.value);
    const handleNote = (e) => setNote(e.target.value);
    const handleDueDate = (e) => setDueDate(e.target.value);
    const handlePriority = (e) => setPriority(e.target.value);

    const handleSave = (e) => {
        if (
            title !== '' &&
            (title !== props.title ||
                completed !== props.completed ||
                note !== props.note ||
                due_date !== (props.due_date ? props.due_date.split('T')[0] : '') ||
                priority !== props.priority)
        ) {
            props.updateTask({
                _id: props._id,
                title: title,
                completed: completed,
                note: note,
                due_date: due_date,
                priority: priority,
            });
            props.updated();
        }

    };

    const detail_toggle = 'task__detail' + (detail ? ' active' : '');
    const complete_toggle = completed ? 'checked' : '';
    const higtlight = () => {
        const hl = ['task'];
        if (priority == 1) {
            hl.push('low');
        } else if (priority == 2) {
            hl.push('medium');
        } else if (priority == 3) {
            hl.push('high')
        }

        return hl.join(' ');
    }
    return (
        <li className={higtlight()}>
            <div className="task__line">
                <div className="task__line--move">
                    <GrTasks/>
                </div>
                <div className="task__line--checked">
                    <HiCheck
                        className={complete_toggle}
                        onClick={handleCompleted}
                    />
                </div>
                <input
                    className="task__line--input"
                    type="text"
                    value={title}
                    onChange={handleTitle}
                    disabled={!detail}
                />
                <div className="task__line--detail" onClick={toggleDetail}>
                    <AiOutlineEdit/>
                </div>
            </div>
            <div className={detail_toggle}>
                <div className="task__detail--left note">
                    <label className="title">Notes</label>
                    <textarea
                        name="task_note"
                        className="note_text"
                        value={note}
                        onChange={handleNote}
                    />
                </div>
                <div className="task__detail--right">
                    <div className="due_date">
                        <label className="title">Due Date</label>
                        <input
                            className="due_date_text"
                            type="date"
                            value={due_date}
                            onChange={handleDueDate}
                        />
                    </div>
                    <div className="priority">
                        <label className="title">Priority</label>
                        <select
                            className="priority_text"
                            value={priority}
                            onChange={handlePriority}
                        >
                            <option value={0}>None</option>
                            <option value={1}>Low</option>
                            <option value={2}>Medium</option>
                            <option value={3}>High</option>
                        </select>
                    </div>
                    <div className="button__group">
                        <button className="save" onClick={handleSave}>
                            save
                        </button>
                        <button
                            className="delete"
                            onClick={() => props.deleteTask(props._id)}
                        >
                            delete
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Task;

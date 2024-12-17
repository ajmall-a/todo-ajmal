import React from 'react';
import enhance from '../hoc/wrapInputBox';

function InputBox(props) {
    const { value, handleChange, handleKeyUp, priority, setPriority, dueDate, setDueDate } = props;

    return (
        <div className="input-container">
            <input autoFocus
                type="text"
                className="form-control add-todo"
                value={value}
                onKeyUp={handleKeyUp}
                onChange={handleChange}
                placeholder="Add New"
            />
            <select 
                value={priority} 
                onChange={(e) => setPriority(e.target.value)}
                className="priority-select"
            >
                <option value="">Select Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <input 
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="due-date-input"
            />
        </div>
    );
}

export default enhance(InputBox);

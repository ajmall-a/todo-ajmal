import React from 'react';
import CheckBox from './CheckBox';
import Toaster from '../Toaster';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showConfirmation: false,
            tempChecked: props.data.completed
        };
    }

    handleChange = (checked) => {
        this.setState({
            tempChecked: checked,
            showConfirmation: true
        });
    };

    handleConfirm = () => {
        this.props.changeStatus(this.props.data.id, this.state.tempChecked);
        this.setState({ showConfirmation: false });
    };

    handleCancel = () => {
        this.setState({
            tempChecked: this.props.data.completed,
            showConfirmation: false
        });
    };

    render() {
        const { data } = this.props;
        const className = 'todo-item ui-state-default ' + (data.completed === true ? 'completed' : 'pending');
        const priorityClass = 'priority-' + (data.priority ? data.priority.toLowerCase() : 'none');

        return (
            <div>
                <li className={`${className} ${priorityClass}`}>
                    <div className="checkbox">
                        <label>
                            <CheckBox checked={this.state.tempChecked} onChange={this.handleChange}/> 
                            <span className="task-text">{data.text}</span>
                            {data.priority && <span className="priority-badge">{data.priority}</span>}
                            {data.dueDate && <span className="due-date">{new Date(data.dueDate).toLocaleDateString()}</span>}
                        </label>
                    </div>
                </li>
                {this.state.showConfirmation && (
                    <Toaster 
                        message="Are you sure you want to change this task's status?"
                        onConfirm={this.handleConfirm}
                        onCancel={this.handleCancel}
                    />
                )}
            </div>
        );
    }
}

export default TodoItem;
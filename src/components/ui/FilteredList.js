import React from 'react';
import TodoItem from './TodoItem';
import {MSG_NO_ITEMS} from '../../assets/text/en_US';

class FilteredList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortType: ''
        };
    }

    handleSortChange = (sortType) => {
        this.setState({ sortType });
    }

    sortItems = (items) => {
        const { sortType } = this.state;
        
        if (!sortType) return items;

        return [...items].sort((a, b) => {
            switch(sortType) {
                case 'dueDate-asc':
                    return new Date(a.dueDate || '9999-12-31') - new Date(b.dueDate || '9999-12-31');
                
                case 'dueDate-desc':
                    return new Date(b.dueDate || '9999-12-31') - new Date(a.dueDate || '9999-12-31');
                
                case 'priority':
                    const priorityOrder = { 'High': 3, 'Medium': 2, 'Low': 1, '': 0 };
                    return priorityOrder[b.priority || ''] - priorityOrder[a.priority || ''];
                
                default:
                    return 0;
            }
        });
    }

    render() {
        const { items, changeStatus } = this.props;
        const sortedItems = this.sortItems(items);

        if (sortedItems.length === 0) {
            return (
                <p className="alert alert-info">{MSG_NO_ITEMS}</p>
            );
        }

        return (
            <div>
                <ul className="list-unstyled">
                    {sortedItems.map(item => (
                        <TodoItem 
                            key={item.id} 
                            data={item} 
                            changeStatus={changeStatus}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default FilteredList; 

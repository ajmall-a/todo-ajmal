import React from 'react';
import {getOptions} from '../../services/filter';

export default function Filter(props) {
    const options = getOptions();
    const {filter, changeFilter, sortType, onSortChange} = props;
    const getClass = (key) => (key === filter ? 'selected' : '');

    return (
        <div className="filter-container">
            <ul className="filters list-unstyled clearfix">
                {Object.keys(options).map(key => (
                    <li key={key}>
                        <a onClick={() => changeFilter(key)} className={getClass(key)}>
                            {options[key]}
                        </a>
                    </li>
                ))}
            </ul>
            <select 
                value={sortType || ''}
                onChange={(e) => onSortChange(e.target.value)}
                className="sort-select"
            >
                <option value="">No Sort</option>
                <option value="dueDate-asc">Due Date (Ascending)</option>
                <option value="dueDate-desc">Due Date (Descending)</option>
                <option value="priority">Priority (High to Low)</option>
            </select>
        </div>
    );
}
import React from 'react';
import InputBox from './InputBox';
import SearchBox from './SearchBox';
import {MODE_SEARCH, MODE_CREATE} from '../../services/mode';

export default function InputWrapper(props) {
    const { mode, addNew, query, setSearchQuery, value, handleChange, handleKeyUp, priority, setPriority, dueDate, setDueDate } = props;

    switch (mode) {
        case MODE_CREATE:
            return  <InputBox
            addNew={addNew}
            value={value}
            handleChange={handleChange}
            handleKeyUp={handleKeyUp}
            priority={priority}
            setPriority={setPriority}
            dueDate={dueDate}
            setDueDate={setDueDate}
        />;

        case MODE_SEARCH:
            return <SearchBox {...{query, setSearchQuery}}/>;

        default:
            return null;
    }
}

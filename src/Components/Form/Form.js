import React, { useRef, useEffect } from 'react';
import classes from './Form.module.css'

function Form(props) {
	// Input ref for focus
	const inputFocus = useRef(null);

    // Cursor is focused on the input when componentDidMount
    useEffect(() => {
        inputFocus.current.focus();
    }, []);

    return (
        <div className={classes.add}>
            <form onSubmit={props.submit}>
                <input ref={inputFocus} type="text" value={props.content} onChange={props.update} placeholder="Let's add a new task" />
                <button type="submit" onClick={props.clicked}>
                    +
                </button>
            </form>
        </div>
    );
}

export default Form;
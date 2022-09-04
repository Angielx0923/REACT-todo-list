import React from 'react';
import classes from './Task.module.css';

function Task(props) {
	return (
		<div className={classes.task} onMouseEnter={props.inputcolor}>
			{props.done ?
				<div className={classes.content}>
					<svg onClick={props.checked} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 22 22">
						<path fill="#FCA859" d="M1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12ZM15.7127 10.7197C16.0055 10.4268 16.0055 9.95192 15.7127 9.65903C15.4198 9.36614 14.9449 9.36614 14.652"/>
						<path fill="#fff" stroke-width="1" stroke-linecap="round" d="M10.5 16.5c-.42 0-.82-.176-1.094-.484l-2.963-2.97c-.274-.26-.443-.653-.443-1.06 0-.405.17-.798.462-1.078.482-.513 1.557-.55 2.113.037l1.925 1.93 4.943-4.958c.52-.55 1.575-.57 2.132.02.256.242.425.634.425 1.04 0 .402-.164.79-.45 1.068l-5.993 6.012c-.238.267-.637.443-1.057.443z"/>
					</svg>
					<strike>
						<input type='text' className={classes.text} value={props.content} onChange={props.update}></input>
					</strike>
				</div>
			:
				<div className={classes.content}>
					<svg onClick={props.checked} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 22 22" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle">
						<circle cx="11" cy="11" r="9"></circle>
					</svg>
					<input type='text' className={classes.text} value={props.content} onChange={props.update}></input>
				</div>
			}
			<svg onClick={props.delete} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
				<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
			</svg>
		</div>
	);
}

export default Task;
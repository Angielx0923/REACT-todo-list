// Librairies
import React, { useEffect, useState } from 'react';
import classes from './App.module.css';

// Database
import axios from '../../database/axios-firebase';

// Components
import Task from '../../Components/Task/Task';
import Form from '../../Components/Form/Form';
import { Fragment } from 'react/cjs/react.production.min';


function App() {

	// STATES
	const [tasks, setTasks] = useState([]);
	const [newTasks, setNewTasks] = useState([]);

	useEffect(() => {
		// Fetch the data when componentDidMount
		fetchData();

	}, []);

	// FONCTIONS
	// Fetch the data stored in database
	const fetchData = () => {
		axios.get('tasks.json')
			.then(response => {
				const newTasks = [];
				for(let key in response.data) {
					newTasks.push({
						...response.data[key], id: key
					});
				};
				// Sort task - shows not done tasks first
				const sortedTasks = [...newTasks].sort((a, b) => Number(a.done) - Number(b.done));
				setTasks(sortedTasks);
		})
		.catch(error => {
			console.log(error)
		});
	}
	// Detect changes in the input
	const detectTextHandler = e => {
		setNewTasks(e.target.value);
	}

	// Add a new task
	const addNewTask = event => {
		event.preventDefault();

		const newTask = {
			content: newTasks,
			done: false
		}

		setTasks([newTask, ...tasks]);
		setNewTasks('');

		axios.post('tasks.json', newTask)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error);
			});
	}

	// Update the text content of the task (conflict with the ref focus on the main input)
	const updateTaskHandler = (event, index) => {
		const updatedTask = [...tasks];
		updatedTask[index].content = event.target.value;
		setTasks(updatedTask);

		axios.put('tasks/' + tasks[index].id + '.json', tasks[index])
			.then(response => {
				console.log(response);
			})
			.catch(error => {
				console.log(error);
			});
	}

	// Delete a task
	const deleteBtnHandler = index => {
		const deletedTask = [...tasks];
		deletedTask.splice(index, 1);
		setTasks(deletedTask);

		axios.delete('tasks/' + tasks[index].id + '.json')
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error);
			});
	}

	// Checkbox behavior when task is done/not done
	const checkedTaskHandler = index => {
		const checkedTask = [...tasks];
		// Change done status for its oposite
		checkedTask[index].done = !tasks[index].done;
		// if (checkedTask.done === true { filter: a la fin })
		setTasks(checkedTask);

		// Update the status in database
		axios.put('tasks/' + tasks[index].id + '.json', tasks[index])
			.then(response => {
				const sortedTasks = [...checkedTask].sort((a, b) => Number(a.done) - Number(b.done));
				setTasks(sortedTasks);
				console.log(response);
			})
			.catch(error => {
				console.log(error);
			});
	}
	

	let input = (
		<Form 
			submit={(e) => addNewTask(e)}
			content={newTasks}
			update={(e) => detectTextHandler(e)}
			clicked={addNewTask}
			>
		</Form>
	);

	let cards = tasks.map((task, index) => (
		<Task 
			key={index}
			content={task.content}
			done={task.done}
			checked={() => checkedTaskHandler(index)}
			update={(e) => updateTaskHandler(e, index)}
			delete={() => deleteBtnHandler(index)}
			// inputcolor={(e) => fixedInputBgColorHandler(e, index)}
			>  
		</Task>
	));

	return (
		<div className={classes.App}>
			<header>
				<span>TO-DO</span>
			</header>

			<>
				{input}
			</>

			<>
				{cards}
			</>

		</div>
	);
}

export default App;

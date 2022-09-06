import React from 'react';

const Task = ({ tasks, setTasks, setEditTask }) => {

    const handleDelete = ({id}) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const handleEdit = ({id}) => {
        const findTask = tasks.find((task) => task.id === id);
        setEditTask(findTask);
    };

    const handleComplete = (task) => {
        setTasks(
            tasks.map((item) => {
               if(item.id === task.id) {
                   return {...item, completed: !item.completed}
               }
               return item;
            })
        )
    };

    return(
        <div>
            {tasks.map((task) => (
                <li className="list-item" key={task.id}>
                    <button className="btn-tick task-button" onClick={() => handleComplete(task)}>
                             <i className="fa fa-check-circle"></i>
                    </button>
                    <input 
                    type="text" 
                    value={task.title} 
                    className={`list ${task.completed ? "complete" : ""}`}
                    onChange={(event) => event.preventDefault()} 
                    />
                    <div>
                        <button className="btn-edit task-button" onClick={() => handleEdit(task)}>
                             <i className="fa fa-edit"></i>
                        </button>
                        <button className="btn-del task-button" onClick={() => handleDelete(task)}>
                             <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </li>
            ))}
        </div>
    );
}


export default Task;
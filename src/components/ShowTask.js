import { useState } from 'react'; 
const ShowTask = () => {
const [task, setTask] =useState("");
const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem('tasklist')) || []);
const [editid, setEditid] = useState(0);
const handleEdit = (id) => {
    const selectedTask = tasklist.find(task => task.id === id);
    setTask(selectedTask.name);
    setEditid(id);
  }

  const handleDelete = (id) => {
    const updatedTasklist = tasklist.filter(task => task.id !== id);
    setTasklist(updatedTasklist);
  }


    return (
        <section className='showTask'>
            <p className="head">
                <span>
                    <span className="title">Todo</span>
                    <span className="count">{tasklist.length}</span>
                </span>
                <span className="clearAll" onClick={() => setTasklist([])}>Clear All</span>
            </p>
            <ul>
                {tasklist.map((task) => (
                    <li key={task.id}>
                        <p>
                            <span className="name">{task.name}</span>
                            <span className="time">{task.time}</span>
                        </p>                
                        <i className="bi bi-pencil-square" onClick={() => handleEdit(task.id)}></i>
                        <i className="bi bi-trash" onClick={() => handleDelete(task.id)}></i>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ShowTask;
import { useState } from 'react';

const AddTask = () => {
    const [task, setTask] =useState("");
    const [tasklist, setTasklist]= useState(JSON.parse(localStorage.getItem("tasklist"))|| []);
    const [editid, setEditid] = useState(0);
    const handleSubmit =(event)=>{
        console.log('whdiywgd');
        event.preventDfault();
        if(task){
          const date = new Date();
          setTasklist([...tasklist, {id: date.getTime(), name: task, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}]);
          setTask("");
        }
        if(editid){
          const date = new Date();
          const selectedTask = tasklist.find(task => task.id === editid);
          const updateTask = tasklist.map((e) => (e.id === selectedTask.id ? (e = {id: e.id, name: task, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}) : {id: e.id, name: e.name, time: e.time}));
          setTasklist(updateTask);
          setEditid(0);
          setTask("");
          return;
        }
        console.log('wlbhwgdiv');
       } 
    return (
        <section className='addTask'>
          <form onSubmit={handleSubmit}>
            <input type="text" name="task" value={task} autoComplete="off" placeholder="Task Name" maxLength="25" onChange={(e) => setTask(e.target.value)}/>
            <button type="submit">{ editid ? "Update" : "Add"}</button>
          </form>
        </section>
    );
}

export default AddTask;
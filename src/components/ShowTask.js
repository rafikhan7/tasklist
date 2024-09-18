const ShowTask = ({tasklist, setTasklist, handleEdit, handleDelete, donTask, setDonTask, handleDone}) => {
    return (
        <>
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
                        <i className="bi bi-check-square" onClick={() => handleDone(task.id)}></i>
                    </li>
                ))}
            </ul>
           

           
            </section>  
            <section className='showTask'>

            <p className="head">
                <span>
                    <span className="title">Done</span>
                    <span className="count">{donTask?.length}</span>
                    <span className="clearAll" onClick={() => setDonTask([])}>Clear All</span>
                </span>
            </p>
            <ul>
                {
                
                donTask?.map((task) => (
                    <li key={task.id}>
                        <p>
                            <span className="name">{task.name}</span>
                            <span className="time">{task.time}</span>
                            <i className="bi bi-trash" onClick={() => handleDelete(task.id)}></i>
                            <span className="name">Done</span>
                        </p>                
        
                    </li>
                ))}
            </ul>
            </section>
            </>
    );
}

export default ShowTask;
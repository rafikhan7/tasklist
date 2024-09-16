
import { useState, useEffect } from 'react'; 
import './App.css';
import Header  from './components/Header';
import AddTask from './components/AddTask';
import ShowTask from './components/ShowTask';

function App() {

  const [theme, setTheme]= useState(JSON.parse(localStorage.getItem('theme')) || "medium", );
  const [tasklist, setTasklist]= useState(JSON.parse(localStorage.getItem("tasklist"))|| []);
  const [editid, setEditid] = useState(0);




useEffect(() => {
  localStorage.setItem('tasklist', JSON.stringify(tasklist));
}, [tasklist]);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);
  return (
    <div className="App">
      <Header setTheme={setTheme} theme={theme}></Header>
      <AddTask/>
      <ShowTask/>

    </div>
  );
}

export default App;

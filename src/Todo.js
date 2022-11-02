import './App.css';
import react, {useState} from 'react'

function Todo() {
const [todoList, setTodoList] = useState([]);
const [newTask, setNewTask] = useState("");

const handleChange = (event) => {
    setNewTask(
   event.target.value
)
}


const addTask = () => {

    const task = {
id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
taskName: newTask,
    };

setTodoList([...todoList, task]);
}


const deleteTask = (id) => {
// const newTodo = todoList.filter((task) => {
//    return task !== taskName
// } ) 

setTodoList(todoList.filter((task) => task.id !== id));
};

  return (
    <div className="App">
<div className='addTask'>
<input onChange={handleChange} type="text" />
<button onClick={addTask}>Add</button>
</div>
<div className='List'>{todoList.map((task)=>{
  return  <div>
     <h1>{task.id}</h1>
     <button onClick={ ()=> deleteTask(task.id)}>X</button>
  </div> 
})}</div>
    </div>
  );
}

export default Todo;

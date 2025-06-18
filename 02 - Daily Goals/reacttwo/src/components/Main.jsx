import React, {useState, useEffect} from 'react'
import Task from './Task'

const Main = () => {

  const initialArray = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];

  const [tasks, setTasks] = useState(initialArray);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // console.log(title, description)

  const submitHandler = (e) => {
    e.preventDefault();

    setTasks([...tasks, {title, description}]);
    // localStorage.setItem("tasks", JSON.stringify(tasks));
    setTitle("");
    setDescription("");
  }

  const deleteTask = (index) => {

    const filteredArray = tasks.filter((value, i) => {
      return i !== index;
    });

    setTasks(filteredArray);
    console.log(filteredArray)
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <main className='w-[60vw] min-h-[90vh] max-[800px]:w-[80vw] self-center p-4 max-[800px]:p-3 px-16 bg-yellow-300 flex flex-col items-center'>
        <span className='font-bold text-[6vw] max-[800px]:text-[8vw] m-4'>Daily Goals</span>
        <form onSubmit={submitHandler} className='w-full m-8'>
            <input 
              type='text' 
              placeholder='Title' 
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
              className='w-full border-2 border-slate-400 rounded p-2 my-2' 
            />
            <textarea  
              cols="30" 
              rows="3" 
              placeholder='Description' 
              value={description} 
              onChange={(e) => setDescription(e.target.value)}
              className='w-full border-2 border-slate-400 rounded p-2 my-2'>
            </textarea>
            <button className='w-full bg-black text-white rounded p-2 font-semibold my-2'>ADD</button>
        </form>

        {tasks.map((item, index)=>(
          <Task
            key={index} 
            title={item.title} 
            description={item.description}
            deleteTask={deleteTask}
            index={index}  
          />
        ))}
    </main>
  )
}

export default Main
"use client"
import React, { useState } from 'react';

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [task, settask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    settask([...task, { title, desc }]);
    settitle("");
    setdesc("");
  }
  const deleteHandler = (i) => {
    let copyTask = [...task];
    copyTask.splice(i,1);
    settask(copyTask);
  }
  let renderTask = <h2>No Task available</h2>
  if (task.length > 0) {
    renderTask = task.map((t,i) =>{
      return <div>
        <li className='taskitem flex w-full justify-between'>
          <div>
          <h3 className='font-medium text-xl'>{ t.title }</h3>
          <p>{ t.desc }</p>
          </div>
          <button className='' 
          onClick={ ()=>{ deleteHandler(i) }}>Remove</button>
        </li>
      </div>
    })
  }

  return ( 
    <>
    <h1 className='heading px-5 py-5 bg-yellow-500 text-center'>Let's do it</h1>

    <form onSubmit={ submitHandler } className=''>

      <input type='text' className='m-10 px-5 py-3' placeholder='Enter task' value={title} onChange={ (e) => {
        settitle(e.target.value)
      }}/>

      <input type='text' className='m-10 px-5 py-3' placeholder='Enter discription' value={desc} onChange={ (e) => {
        setdesc(e.target.value)
      }}/>

      <button type='submit' className='h-fit text-white mx-10 my-2 px-5 py-3 bg-yellow-500'>Add Task</button>

    </form>
    <hr/>
    <div className='my-10 mx-40 p-8'>
      <ul>
        <li>{ renderTask }</li>
      </ul>
    </div>
    </>
   );
}

export default page;
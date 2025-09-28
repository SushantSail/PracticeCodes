import React, { useState } from 'react';

export const TodoList = () => {
    const[taskList , setTaskList] = useState([]);
    const[input , setInput]= useState('');

    function handleSubmit(e){
        e.preventDefault();
        const task = {
            id: new Date().getTime,
            name: input,
        }
        setTaskList([...taskList,task])
        setInput('')
    }

    function handleReset(){
        setTaskList([]);
    }

    return (
        <>
        <div>TASK LIST</div>  

        <form onSubmit={handleSubmit}>
            <input type="text" 
            value={input}
            onChange={(e) => {setInput(e.target.value)}}/>
            <button type='submit'>ADD</button>
            <button type='button' onClick={handleReset}>Reset</button>
        </form>


        <div>
            <div>Show task</div>
            <div>
                <ul>
                    {
                        taskList.map((task)=>(
                        <li key={task.id}>{task.name}</li>
                        ) )
                    }
                </ul>
            </div>
        </div>
        </>
    );
}



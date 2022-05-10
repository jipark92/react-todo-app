import {Form, Button} from 'react-bootstrap'
import {useState,useEffect} from 'react'

export default function ToDo() {

    const [inputValue, setInputValue] = useState()

    const [tasks, setTasks] = useState([{
        name: "example 1"
    }])

    useEffect(()=>{
        
    })

    const randomRainbow = () => {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for(let i=0; i <6; i++){
            color += letters[Math.floor(Math.random() * 16)]
        }
        return color;
    }

    const changeInputValue = (e) => {
        setInputValue(e.target.value)
    }

    const submitValue = () => {
        tasks.push({name: inputValue})
        // setTasks(tasks=> tasks.push({name: inputValue}))
        
        console.log(tasks)
    }

    const showTasks = tasks.map((task,i)=>{
        return(
            <div className='tasks' key={i} style={{backgroundColor:`${randomRainbow()}`}}>
                <div className='task-list'>
                    <p className='text-light h5'>{task.name}</p>
                </div>
                
                <div className='btn-container'>
                    <Button variant="success">EDIT</Button>
                    <Button variant="primary">TODO</Button>
                    <Button variant="danger">Delete</Button>
                </div>
            </div>
        )
    })

    return (
        <div className="todo-container bg-light">
            <div className="todo bg-dark">
                <h1 className='text-warning'>Whats going on?</h1>
                <div className="input-container">
                    <Form.Control size="lg" type="text" placeholder="Go to the bank" onChange={changeInputValue}/>
                    <div className="d-grid gap-2">
                        <Button variant="warning" size="lg" onClick={submitValue}>Submit</Button>
                    </div>
                </div>
                <h2 className='text-light'>TO DO LIST</h2>
                <div className="tasks-container">
                    {showTasks}
                </div>
            </div>
        </div>
    )
}
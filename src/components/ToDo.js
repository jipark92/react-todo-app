import {Form, Button} from 'react-bootstrap'
import {useState} from 'react'

export default function ToDo() {

    const tasks = ["Example 1"];

    function randomRainbow() {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for(let i=0; i <6; i++){
            color += letters[Math.floor(Math.random() * 16)]
        }
        return color;
    }

    const [inputValue, setInputValue] = useState("")
    const [submitValue, setSubmitValue] = useState()

    const changeInputValue = (e) => {
        setInputValue(e.target.value)
        console.log(inputValue)
    }


    return (
        <div className="todo-container bg-light">
            <div className="todo bg-dark">
                <h1 className='text-primary'>Whats going on?</h1>
                <div className="input-container">
                    <Form.Control size="lg" type="text" placeholder="Go to the bank" onChange={changeInputValue}/>
                    <div className="d-grid gap-2">
                        <Button variant="warning" size="lg">Submit</Button>
                    </div>
                </div>
                <div className="tasks-container">
                    {tasks.map((task,i)=>{
                        return(
                            <div className='tasks' key={i} style={{backgroundColor:`${randomRainbow()}`}}>
                                <div className='task-list'>
                                    <p className='text-light h5'>{task}</p>
                                </div>
                                
                                <div className='btn-container'>
                                    <Button variant="success">EDIT</Button>
                                    <Button variant="primary">TODO</Button>
                                    <Button variant="danger">Delete</Button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
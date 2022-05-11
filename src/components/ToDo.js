import {Form, Button} from 'react-bootstrap'
import {useState} from 'react'

export default function ToDo() {

    const [inputValue, setInputValue] = useState("")
    const [errorText, setErrorText] = useState("")
    const [successColor, setSuccessColor] = useState("")
    const [editStatus, setEditStatus] = useState(true)
    
    const [tasks, setTasks] = useState([{
        name: "Go to the bank",
        edit: true
    },
    {
        name: "Walk my dog",
        edit: true
    },
    {
        name: "Eat dinner with friend",
        edit: true
    }])

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
        if(inputValue === undefined || inputValue === ""){
            setSuccessColor("red")
            setErrorText('Please type something in')
            setTimeout(()=>{
                setErrorText('')
            },1000)
            return
        } else{
            setSuccessColor("green")
            setErrorText("Task successfully added")
            setTimeout(()=>{
                setErrorText('')
            },1000)
            setTasks(prevTasks =>  {
                return [...prevTasks, {
                    name: inputValue
                }]
            })
        }
    }

    const handleDelete = (e) => {
        console.log('deleted')
        const filteredTasks = tasks.filter((tasks,i)=>{
            if(parseInt(e.target.id) !== i){
                return tasks
            }
        })
        setTasks(filteredTasks)
    }

    const handleEdit = (e) =>{
        console.log('edit clicked')
        setTasks(prevTasks=> prevTasks.map((tasks,i)=>{
            if(parseInt(e.target.id)===i){
                return [...tasks, {
                    name: "blah",
                    edit: false
                }]
            }
        }))

    }

    const showTasks = tasks.map((task,i)=>{
        return(
            <div className='tasks' key={i} style={{backgroundColor:`${randomRainbow()}`}}>
                <div className={editStatus?"task-list":"task-list-edit"}>
                    <h2>#{i}</h2>
                    <input type ="text" value={task.name} className={editStatus?"task-list":"task-list-edit"}/>
                </div>
                
                <div className='btn-container'>
                    <Button variant="success" onClick={handleEdit} id={i}>EDIT TITLE</Button>
                    {/* <Button variant="primary">TODO</Button> */}
                    <Button variant="danger" onClick={handleDelete} id={i}>DELETE TASK</Button>
                </div>
            </div>
        )
    })

    return (
        <div className="todo-container bg-light">
            <div className="todo bg-dark">
                <h1 className='text-warning'>What's going on?</h1>
                <div className="input-container">
                    <Form.Control size="lg" type="text" placeholder="Go to the bank" onChange={changeInputValue}/>
                    <div className="d-grid gap-2">
                        <Button variant="warning" size="lg" onClick={submitValue}>SUBMIT</Button>
                    </div>
                    <div className='error-success-container'>
                        <p className='h5 my-1' style={{color:successColor}}>{errorText}</p>
                    </div>
                </div>
                <h3 className='text-light'>TO DO LIST</h3>
                <div className="tasks-container">
                    {showTasks}
                </div>
            </div>
        </div>
    )
}
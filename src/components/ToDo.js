import {Form, Button} from 'react-bootstrap'
import {useState} from 'react'

export default function ToDo() {
    //bootstrap
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //storage
    const [inputValue, setInputValue] = useState("")
    const [errorText, setErrorText] = useState("")
    const [successColor, setSuccessColor] = useState("")
    

    const [tasks, setTasks] = useState([{
        name: "Go to the bank"
    },
    {
        name: "Walk my dog"
    },
    {
        name: "Eat dinner with friend"
    }
])

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

    const showTasks = tasks.map((task,i)=>{
        return(
            <div className='tasks' key={i} style={{backgroundColor:`${randomRainbow()}`}}>
                <div className='task-list'>
                    <p className='text-light h5'>#{i}. {task.name}</p>
                </div>
                
                <div className='btn-container'>
                    <Button variant="success">EDIT</Button>
                    {/* <Button variant="primary">TODO</Button> */}
                    <Button variant="danger" onClick={handleDelete} id={i} >DELETE</Button>
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
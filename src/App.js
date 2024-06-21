
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./App.css";
import { useState } from "react";
import { Alert } from "bootstrap";
import Tasks from "./components/form/Tasks";


function App() {
  const [tasks, setTasks] = useState([]);


  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newTask = formData.get("task");
    if(newTask && newTask.length > 4){
      // console.log(formData.get("task"));
      setTasks([...tasks, newTask]);
      console.log(tasks);
    }else{
      throw Alert(`U Need To Add a Valid Task `)
    };
    }


  const handleClick =(event)=>{
    event.target.style.textDecoration = "line-through"; 
    event.target.style.color = "green"; 
  }
  
  const handleTaskClick =(event)=>{
    event.target.parentElement.remove();
  }

  return (
    <div className="bg-secondary container rounded mt-5 App">
      <Form onSubmit={handleSubmit} className="px-5 pb-1  pt-5 text-center">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ fontSize: "30px" }}>
            Enter What do u wand to do!!!
          </Form.Label>
          <Form.Control name="task" type="text" placeholder="Enter Task" />
        </Form.Group>
        <Button className="mt-2" variant="light" type="submit">
          Add Task
        </Button>
        <ul className="tasks-group d-flex flex-column mb-3 mt-2 justify-content-center ps-0 mx-5">
          {tasks.map((task) => <>
            <Tasks task={task} handleClick={handleClick} handleTaskClick={handleTaskClick} />
          </>
          )}
        </ul>
      </Form>
    </div>
  );
}
export default App;

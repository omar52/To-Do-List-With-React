import Button from "react-bootstrap/Button";

import React from "react";
import Form from "react-bootstrap/Form";
import "./App.css";
import { useState } from "react";
import { Alert } from "bootstrap";
import Tasks from "./components/form/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.target);
  //   const newTask = formData.get("task");
  //   if (newTask && newTask.length > 4) {
  //     // console.log(formData.get("task"));
  //     setTasks([...tasks, newTask]);
  //     console.log(tasks);
  //     event.target.reset();
  //   } else {
  //     new Alert(`U Need To Add a Valid Task `);
  //   }
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = inputValue;

    if (newTask && newTask.length > 4) {
      // console.log(formData.get("task"));
      setTasks([...tasks, newTask]);
      console.log(tasks);
      setInputValue("");
    } else {
      new Alert(`U Need To Add a Valid Task `);
    }
  };

  const handleDeleteTask = (index) => {
    const updatedList = tasks.filter(
      (task, filterIndex) => filterIndex !== index
    );
    setTasks(updatedList);
  };

  return (
    <div className="bg-secondary container rounded mt-5 App">
      
      <Form onSubmit={handleSubmit} className="px-5 pb-1  pt-5 text-center">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ fontSize: "30px" }}>
            Enter What Do You Want To Do
          </Form.Label>
          <Form.Control
            onChange={(event) => setInputValue(event.target.value)}
            name="task"
            type="text"
            placeholder="Enter Task"
            value={inputValue}
          />
        </Form.Group>
        <Button className="mt-2" variant="light" type="submit">
          Add Task
        </Button>
        {!tasks.length ? (
          <p className=" mt-3 text-white">" There Are No Tasks To Do "</p>
        ) : (
          <ul className="tasks-group d-flex flex-column mb-3 mt-2 justify-content-center ps-0 mx-5">
            {tasks.map((task, index) => (
              <React.Fragment key={index}>
                <Tasks
                  task={task}
                  handleTaskClick={() => handleDeleteTask(index)}
                />
              </React.Fragment>
            ))}
          </ul>
        )}
      </Form>
    </div>
  );
}
export default App;

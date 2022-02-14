import React, { useEffect } from "react";
import { useState } from "react";
import TaskForm from "../components/TaskForm";
import { Box, Button, Grid, Spinner } from "grommet";
import TaskMap from "../components/TaskMap";

//look @ buyhomepage for functional component fetch call.

function ToDoListPage() {
  const [list, setList] = useState([]);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTaskList();
  }, []);

  //gets all tasks posted 
  const getTaskList = () => {
    fetch("/api/tasks")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        if (!data) {
          setList([]);
          setLoading(true);
        } else {
          setList(data);
        }
      })
      .catch((err) => {
        setLoading(true);
      });
  };

  //adds a task to the list through POST method 
  const addToList = (task) => {
    fetch("/api/tasks/new", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: task.content }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setList([data, ...list]);
      });
  };

  //checkoff task as done - does not save in state properly
  const completeTask = (id) => {

      let updatedList = list.map((task) => {
          if (task.id === id) {
            task.isComplete = !task.isComplete;
            setChecked(!checked);
          }
          return task;
        });
        setList(updatedList);
    

  };

  //delete task
  const deleteTask = (id) => {
    fetch(`/api/tasks/${id}`,{
      method: "DELETE"
    }).then(()=> {
      setList([...list].filter((task) => task.id !== id));
    })
  };

  //edit a task
  const editTask = (taskId, newInfo) => {
    fetch(`/api/tasks/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newInfo),
    })
    setList((prev) =>
      prev.map((task) => (task.id === taskId ? newInfo : task))
    );
  };

  //deletes all tasks from list-
  const deleteAll = () => {
    fetch("/api/tasks", {
      method: "DELETE"
    })
    .then(setList([]));
  };
  
  if (loading) {
    return <Spinner />; 
  }

  return (
    <Box align="center" pad="small">
      <Grid gap="xsmall">
        <TaskForm onSubmit={addToList} />
      </Grid>

      <Grid gap="small" align="center">
          <TaskMap
            list={list}
            completeTask={completeTask}
            deleteTask={deleteTask}
            editTask={editTask}
          />
      </Grid>
      
      <Grid gap="small">
        <Box align="center" pad="medium">
          <Button background="brand" onClick={deleteAll} label="clear all" />
        </Box>
      </Grid>
    </Box>
  );
}

export default ToDoListPage;

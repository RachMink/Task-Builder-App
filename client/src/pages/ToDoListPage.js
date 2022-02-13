import React, { useEffect } from "react";
import { useState } from "react";
import TaskForm from "../components/TaskForm";
import { Box, Button, Grid } from "grommet";
import TaskMap from "../components/TaskMap";

//look @ buyhomepage for functional component fetch call.

function ToDoListPage() {
  const [list, setList] = useState([]);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

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
        } else {
          setList(data);
        }
      });
  };

  useEffect(() => {
    getTaskList();
  }, []);

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

  const completeTask = () => {
    setChecked(!checked);
  };

  const deleteTask = (id) => {
    fetch(`/api/tasks/${id}`,{
      method: "DELETE"
    }).then(()=> {
      setList([...list].filter((task) => task.id !== id));
    })
  };

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

  //removes all tasks from list-
  const deleteAll = () => {
    fetch("/api/tasks", {
      method: "DELETE"
    })
      .then(setList([]));
  };

  return (
    <Box>
      <Grid gap="xsmall">
        <TaskForm onSubmit={addToList} />
      </Grid>
      <Grid gap="small">
        <TaskMap
          list={list}
          completeTask={completeTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      </Grid>
      <Grid gap="small">
        <Button background="brand" onClick={deleteAll} label="clear all" />
      </Grid>
    </Box>
  );
}

export default ToDoListPage;

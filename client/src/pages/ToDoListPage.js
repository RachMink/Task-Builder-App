import React, { useEffect } from "react";
import { useState } from "react";
import TaskForm from "../components/TaskForm";
import { Box, Button, Grid } from "grommet";
import TaskMap from "../components/TaskMap";

// class ToDoListPage extends React.Component {
//   state = {
//     items: [],
//     loading: true,
//   };

//   componentDidMount() {
//     fetch('/api/todo/new')
//       .then((res) => res.json())
//       .then((items) => {
//         this.setState({
//           loading: false,
//           items: items.map((p, ii) => <Post {...p} key={ii} />),
//         });
//       })
//       .catch((err) => console.log("API ERROR: ", err));
//   }

//   render() {
//     if (this.state.loading) {

//     // return <Spinner />;

//     }

//     return (
//       <Box>
//         <Box flex align="center" justify="center">
//           <TaskForm />
//         </Box>

//         <div className="row justify-content-center">{this.state.items}</div>
//       </Box>
//     );
//   }
// }

// export default ToDoListPage;

//look @ buyhomepage for functional component fetch call.

function ToDoListPage() {
  const [list, setList] = useState([]);
  const [checked, setChecked] = useState(false);

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

  const deleteTask = (id) => {
    const removeArr = [...list].filter((task) => task.id !== id);
    setList(removeArr);
  };

  const editTask = (taskId, newInfo) => {
    setList((prev) =>
      prev.map((item) => (item.id === taskId ? newInfo : item))
    );
  };

  //removes all tasks from list-
  const deleteAll = () => {
    setList([]);
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

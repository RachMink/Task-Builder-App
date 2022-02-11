import React from "react";
import { useState } from "react";
import TaskForm from "../components/TaskForm";
import { Box, Grid } from "grommet";
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

//     // return <Loading />;

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

  const addToList = (task) => {
    //spread operator to combine new and old to dos
    setList([task, ...list]);
  };

  const completeTask = (id) => {
    let updatedList = list.map((task) => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      return task;
    });
    setList(updatedList);
  };

  //removes all tasks -
  const deleteTask = (id) => {
    const removeArr = [...list].filter((task) => task.id !== id);
    setList(removeArr);
  };

  const editTask = (taskId, newInfo) => {
    setList((prev) =>
      prev.map((item) => (item.id === taskId ? newInfo : item))
    );
  };

  return (
    <Box>
      <Grid gap="xsmall">
        <TaskForm onSubmit={addToList} />
      </Grid>
      <Grid gap="small">
        <TaskMap
          list={list}
          //   list={[
          //     { id: "1", content: "rachelli" },
          //     { id: "2", content: "hi" },
          //   ]}
          completeTask={completeTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      </Grid>
    </Box>
  );
}

export default ToDoListPage;

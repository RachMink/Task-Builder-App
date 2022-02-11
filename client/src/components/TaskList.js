import React from "react";
import { useState } from "react";
import Post from "../components/Post";
import Loading from "../components/Loading";
import TaskForm from "../components/TaskForm";
import { Grommet, Box } from "grommet";
import ToDoListPage from "../pages/ToDoListPage";
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

function TaskList() {
  const [list, setList] = useState([]);

  const addToList = (task) => {
    //spread operator to combine new and old to dos
    setList([task, ...list]);
    console.log(task, ...list);
  };

  const completeTask =(id)=>{
    let updatedList = list.map(task =>{
        if(task.id === id){
            task.isComplete = !task.isComplete;
        }
        return task;
    });
    setList(updatedList);
  };

  const deleteTask =(id)=>{
    const removeArr = [...list].filter(todo=> todo.id !== id);
    setList(removeArr);
  }

  return (
    <Box>
      <Box flex align="center" justify="center">
        <TaskForm onSubmit={addToList} />
        <TaskMap list={list}
        //   list={[
        //     { id: "1", content: "rachelli" },
        //     { id: "2", content: "hi" },
        //   ]}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      </Box>
    </Box>
  );
}

export default TaskList;

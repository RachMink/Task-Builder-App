import React from "react";
import { useState } from "react";
import Post from "../components/Post";
import Loading from "../components/Loading";
import TaskForm from "../components/TaskForm";
import { Grommet, Box, Grid, Form } from "grommet";
import { FormEdit, Trash } from "grommet-icons";

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
//           {this.state.list}
//         </Box>

//         <div className="row justify-content-center">{this.state.items}</div>
//       </Box>
//     );
//   }
// }

// export default ToDoListPage;

function TaskMap({ list, completeTask, deleteTask }) {
  const [edit, setEdit] = useState({ id: null, value: "" });

  return list.map((task, index) => (
    <Form>
      <Grid>
        <Box>
          {console.log("oooooo")}
          {console.log(task.content)}
          <div>{task.content}</div>

          <FormEdit
            onClick={() => setEdit({ id: task.id, value: task.content })}
          />
          <Trash onClick={() => deleteTask(task.id)} />
        </Box>
      </Grid>
    </Form>
  ));
}

export default TaskMap;

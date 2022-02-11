import React from "react";
import { useState } from "react";
import Post from "../components/Post";
import Loading from "../components/Loading";
import TaskForm from "../components/TaskForm";
import { Grommet, Box, Grid, Form, CardFooter, CardBody, Card } from "grommet";
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

function TaskMap({ list, completeTask, deleteTask , editTask}) {
  const [edit, setEdit] = useState({ id: null, value: "" });

  const submitEdit = value =>{
      editTask(edit.id, value);
      setEdit({
          id:null,
          value:''
      });
  };

  if(edit.id){
      return <TaskForm edit={edit} onSubmit={submitEdit}/>
  }

  return list.map((task, index) => (
    // <Form>
    //   <Grid gap="small">
        <Card height="xsmall" width="medium" round="small" overflow="auto">
          {console.log("oooooo")}
          {console.log(task.content)}
          {/* change complateTask to click off checkbox when completed */}
          <CardBody
            key={task.id}
            onClick={() => completeTask(task.id)}
            pad={{ horizontal: "small", vertical: "xsmall" }}
          >
            {task.content}
          </CardBody>
          <CardFooter
            pad={{ horizontal: "small", vertical: "xsmall" }}
            background="brand"
          >
            <FormEdit
              onClick={() => setEdit({ id: task.id, value: task.content })}
            />
            <Trash size="small" onClick={() => deleteTask(task.id)} />
          </CardFooter>
        </Card>
    //   </Grid>
    // </Form>
  ));
}

export default TaskMap;

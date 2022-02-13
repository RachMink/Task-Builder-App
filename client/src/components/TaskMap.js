import React from "react";
import { useState } from "react";
import TaskForm from "../components/TaskForm";
import { Grommet, Box, Grid, CardFooter, CardBody, Card, CheckBox, CardHeader } from "grommet";
import { FormEdit, Trash } from "grommet-icons";


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

    <Card
      height="xsmall"
      width="medium"
      round="small"
      overflow="auto"
      gap="small"
    >
      {console.log("oooooo")}
      {console.log(task.content)}

      <CardBody
        key={task.id}
        pad={{ horizontal: "small", vertical: "medium" }}
      >
        <CheckBox
          checked={task.checked}
          label={task.content}
          onClick={() => completeTask()}
        />
      </CardBody>

      <CardFooter
        pad={{ horizontal: "small", vertical: "xxsmall" }}
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

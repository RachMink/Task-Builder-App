import React from "react";
import { useState } from "react";
import { CardFooter, CardBody, Card, CheckBox } from "grommet";
import { FormEdit, Trash } from "grommet-icons";
import TaskEditForm from "./TaskEditForm";


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
    return <TaskEditForm edit={edit} onSubmit={submitEdit}/>
  }

  return list.map((task, id) => (

    <Card
      key={id}
      height="xsmall"
      width="medium"
      round="small"
      overflow="auto"
      gap="small"
    >
      <CardBody
        key={task.id}
        pad={{ horizontal: "small", vertical: "medium" }}
      >
        <CheckBox
          checked={task.checked}
          label={task.content}
          onClick={() => completeTask(task.id)}
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

  ));
}

export default TaskMap;

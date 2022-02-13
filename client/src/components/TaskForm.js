import React from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import {
  Button,
  CheckBoxGroup,
  DateInput,
  Form,
  FormField,
  Box,
  TextInput,
  Grommet,
} from "grommet";
import { Add } from "grommet-icons";

function TaskForm({onSubmit}){
  const [task , setTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({content: task,});
    setTask("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormField>
        <TextInput
          value={task}
          placeholder="Add task to do"
          id="content"
          name="content"
          onChange={(event) => setTask(event.target.value)}
        />
      </FormField>
      <Button type="submit" primary label={<Add />} />
    </Form>
  );
}
export default TaskForm;




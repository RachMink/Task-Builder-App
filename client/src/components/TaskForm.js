import React from "react";
import { useState } from "react";
import {
  Box,
  Button,
  Form,
  TextInput,
} from "grommet";
import { FormAdd } from "grommet-icons";

function TaskForm({onSubmit}){
  const [task , setTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({content: task});
    setTask("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      
      <Box fill align="center" justify="start" pad="medium">
        <Box direction="row" width="medium" gap="xsmall">
          <TextInput
            value={task}
            id="content"
            name="content"
            onChange={(event) => setTask(event.target.value)}
            reverse
            placeholder="Type new task"
          />

          <Box align="center" gap="xsmall">
            <Button icon={<FormAdd />} hoverIndicator primary type="submit" />
          </Box>
        </Box>
      </Box>
    </Form>
  );
}
export default TaskForm;




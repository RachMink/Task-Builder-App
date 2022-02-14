import React from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { Box, Button, Form, FormField, TextInput } from "grommet";
import { Add, Update } from "grommet-icons";

function TaskEditForm({ edit, onSubmit }) {
  //already filled in with what was there previously
  const [task, setTask] = useState(edit);

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({ content: task });
    setTask("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Box fill align="center" justify="start" pad="medium">
        <Box direction="row" width="medium" gap="small">
          <TextInput
            value={task}
            id="content"
            name="content"
            onChange={(event) => setTask(event.target.value)}
            reverse
            placeholder="Edit task"
          />

          <Box align="center" gap="small">
            <Button icon={<Update/>} hoverIndicator primary type="submit" />
          </Box>
        </Box>
      </Box>
    </Form>
  );
}
export default TaskEditForm;

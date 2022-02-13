import React from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { Box, Button, Form, FormField, TextInput } from "grommet";
import { Add, Update } from "grommet-icons";

function TaskEditForm({ onSubmit }) {
  const [task, setTask] = useState("");

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

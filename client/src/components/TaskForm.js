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

function TaskForm(props){
    
  const [task , setTask] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      content: task,
    });

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
// class AddTask extends React.Component {
//   state = {
//     error: false,
//     success: false,
//     school: false,
//     work: false,
//     home: false,
//     title: "",
//     type: [],
//     date: "",
//     content: "",
//   };

//   setType = (event) => {
//     this.setState({
//       type: event,
//     });
//   };

//   setDate = (event) => {
//     this.setState({
//       date: event,
//     });
//   };

//   setTitle = (event) => {
//     this.setState({
//       title: event,
//     });
//   };
//   saveTask = (event) => {
//     fetch("/api/todo/new", {
//       method: "POST",
//       credentials: "include",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         title: this.state.title,
//         date: this.state.date,
//         type: this.state.type,
//       }),
//     })
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         }

//         throw new Error("Content validation");
//       })
//       .then((post) => {
//         this.setState({
//           success: true,
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//         this.setState({
//           error: true,
//         });
//       });
//   };

//   render() {
//     //if (this.state.success) return <Redirect to="/" />;
//     // console.log("where you at?");
//     // let errorMessage = null;
//     //  if (this.state.error) {
//     //    errorMessage = (
//     //      <div className="alert alert-danger">
//     //        "There was an error saving this post."
//     //      </div>
//     //    );
//     //  }

//     return (
//       <Form>
//         <Box>
//           <FormField name="title">
//             <TextInput
//               value={this.state.title}
//               placeholder="title"
//               id="title"
//               name="title"
//               onChange={(event) => this.setTitle(event.target.value)}
//             />
//           </FormField>
//           <FormField name="date">
//             <DateInput
//               format="mm/dd/yyyy"
//               value={new Date().toISOString()}
//               onChange={({ value }) => {
//                 this.setDate(value);
//               }}
//             />
//           </FormField>

//           <Box pad="medium">
//             <FormField
//               label="task type"
//               id="check-box-formfield-id"
//               name="type"
//             >
//               <CheckBoxGroup
//                 id="check-box-group-id"
//                 name="type"
//                 aria-labelledby="check-box-formfield-id"
//                 value={this.state.type}
//                 onChange={({ value: nextValue }) => this.setType(nextValue)}
//                 options={["School", "Work", "Home"]}
//               />
//             </FormField>
//           </Box>

//           <Box direction="row" gap="medium">
//             <Button type="submit" primary label="Add" onClick={this.saveTask} />
//             <Button type="reset" label="Reset" />
//           </Box>
//         </Box>
//       </Form>
//     );
//   }
// }

// export default AddTask;



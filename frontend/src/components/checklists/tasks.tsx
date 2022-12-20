function Task(props: any) {
  //When called, this function retruns user input, as a task (bullet point format, can be styled)
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default Task;

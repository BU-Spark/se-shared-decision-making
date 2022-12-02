import useFetch from "./useFetch";
function App  ()  {
  const {questions, error} = useFetch('http://localhost:1337/api/homepages');
  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }
  
  return (
    <div className="App">
      <ul>
        {questions.map(({ id, attributes }) => <li key={id}><h1>{attributes.Question}</h1><p>{attributes.Answer}</p></li>)}
      </ul>
    </div>
  );
}

export default App;
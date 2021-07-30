import React from "react";

function Food({fav}) {
  // function Food(props)
  // return <h1>I love {props.fav}</h1>
  return <h2>I love {fav}</h2>
}
function App() {
  return (
    <div className="App">
      <h1>React ! </h1>
      <Food fav="ketchap" />
      <Food fav="Pang" />
      <Food fav="egg" />
      <Food fav="green food" />
    </div>
  );
}

export default App;

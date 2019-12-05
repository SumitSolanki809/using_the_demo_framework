import React from 'react';
import './App.css';
import { MyButton } from 'myframeworksumitkumar/dist/MyButton.js'

//give the entire path for accessing the framework from the component

function App() {
  return (
    <div className="App">
      <MyButton children={'hello world, lets code!!'} />
    </div>
  );
}

export default App;

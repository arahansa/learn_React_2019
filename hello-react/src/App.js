import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from "./MyComponent";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";

function App() {
  return (
    <Fragment>
      <h1>리액트 안녕!</h1>
      <h2> 당신은 어썸한가요? </h2>
      <MyComponent name="React" />
      <EventPractice/>
      <ValidationSample/>
    </Fragment>
  );
}

export default App;

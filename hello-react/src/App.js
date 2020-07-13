import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from "./MyComponent";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import IterationSample from "./IterationSample";

class App extends Component{
  render(){
      return (
          <Fragment>
              <h1>리액트 안녕!</h1>
              <h2> 당신은 어썸한가요? </h2>
              <MyComponent name="React" />
              <EventPractice/>
              <ValidationSample/>
              <ScrollBox ref={(ref) => this.scrollBox = ref} ></ScrollBox>
              <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
              <IterationSample/>
          </Fragment>
      )
  }
}

export default App;

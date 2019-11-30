import React, {Component} from 'react';
import styles from './App.scss';
import classNames from 'classnames/bind';
import Button from "./components/Button";
import StyledButton from "./components/StyledButton";
console.log('styles: ', styles)
const cx = classNames.bind(styles);
console.log('cx: ', cx)

class App extends Component{
  render(){
    const isBlue = true;
    return (
        <div>
            <StyledButton big>버튼</StyledButton>
            <Button>버튼</Button>

          {/*  <div className={cx('box', {*/}
          {/*  'blue' : isBlue*/}
          {/*})}>*/}
          {/*  <p>펭하?</p>*/}
          {/*    <div className={cx('box-inside')}></div>*/}
          {/*</div>*/}
        </div>
    );
  }

}

export default App;

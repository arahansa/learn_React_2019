import React, {Component} from 'react';

class EventPractice extends Component {
    state = {
        message : ''
    }


    handleChange  = (e) =>{
        this.setState({message: e.target.value})
    }


    render() {
        return (
            <div>
                <h1>이벤트연습</h1>
                <input type="text" name="message" placeholder="아무거나 입력해보세요" onChange={this.handleChange} value={this.state.message} />
                <button onClick={() => {alert(this.state.message); this.setState({message: ''})}}>확인</button>
            </div>
        );
    }
}

export default EventPractice;
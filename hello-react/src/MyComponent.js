import React, {Component} from 'react';

class MyComponent extends Component {
    static defaultProps = {
        name: "기본이름"
    }

    render() {
        return (
            <div>
                나의 새롭고 멋진 컴포넌트
                제 이름은 {this.props.name} 입니다
            </div>
        );
    }
}


export default MyComponent;
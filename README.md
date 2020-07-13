
# 5.3 컴포넌트에 ref 달기
<MyComponent ref={(ref)=> {this.myComponent = ref}}

# 7장

### 업데이트
컴포넌트를 업데이트할 경우는 네가지 경우
1. props 가 바뀔 때
2. state 가 바뀔 때
3. 부모 컴포넌트가 리렌더링될 때
4. this.forceUpdate 로 강제로 렌더링을 트리거할 때

업데이트할 때 호출하는 메서드
getDerivedStateFromProps : 마운트 과정에서도 호출하며 props 가 바뀌어서 업데이트할 때도 호출한다
shouldComponentUpdate : 컴포넌트가 리렌더링을 해야 할지 말아야 할지를 결정하는 메서드이다.
render : 컴포넌트를 리렌더링한다.
getSnapshotBeforeUpdate : 컴포넌트 변화를 DOM 에 반영하기 바로 직전에 호출하는 메서드
componentDidUpdate : 컴포넌트의 업데이트 작업이 끝난 후 호출하는 메서드

# 8 장

### 8.2 언제 함수형 컴포넌트를 사용해야 할까? 
함수형 컴포넌트는 컴포넌트에서 라이프사이클, state 등 불필요한 기능을 제거한 상태이기 때문에 메모리 소모량은 일반 클래스형 컴포넌트보다 작다. 

# 9장 컴포넌트 스타일링 에서 잠시 스킵


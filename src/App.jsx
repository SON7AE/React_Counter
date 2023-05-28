// 1. UI(User Interface) 구현
// UI는 사용자 인터페이스라는 뜻으로, 웹 페이지에서 사용자와 상호작용하는 요소를 말한다.
// 이 요소들의 사용성을 높이기 위해 기능을 추가하기도 하고, 특별한 형태나 색상 등의 스타일을 적용하기도 한다.
// 기능 구현에 앞서 UI를 먼저 구현한다고 함은 쉽게 말해 이들 요소의 외양(껍데기)을 먼저 만든다고 이해하면 된다.

// 2. State는 어떤 컴포넌트에 만들까?
// State는 반드시 컴포넌트 함수 안에 만들어야 한다.

// 3. 리액트 컴포넌트 라이프 사이클
// - 마운트(Mount) : 컴포넌트를 페이지에 처음 렌더링할 때
// - 업데이트(Update) : State나 Props의 값이 바뀌거나 부모 컴포넌트가 리렌더해 자신도 리렌더될 때
// - 언마운트(Unmount) : 더 이상 페이지에 컴포넌트를 렌더링하지 않을 때
// useEffect를 이용하면 라이프사이클을 쉽게 제어할 수 있다.

// useEffect
// 함수 useEffect는 어떤 값이 변경될 때마다 특정 코드를 실행하는 리액트 훅이다.
// 이를 '특정 값을 검사한다' 라고 표현한다.
// 예컨대 useEffect를 이용하면 컴포넌트의 State 값이 바뀔 때마다 변경된 값을 콘솔에 출력하게 할 수 있다.

import './App.css'
import { useState, useEffect } from 'react'
import Viewer from './components/Viewer'
import Controller from './components/Controller'

function App() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState('')

    const handleSetCount = (value) => {
        setCount(count + value)
    }
    const handleChangeText = (event) => {
        setText(event.target.value)
    }
    // useEffect의 용법 : useEffect(callback, [deps])
    useEffect(() => {
        console.log('count 업데이트: ', count, text)
    }, [count, text])

    return (
        <div className="App">
            <h1>Simple Couter</h1>
            <section>
                <Viewer count={count} />
            </section>
            <section>
                <Controller handleSetCount={handleSetCount} />
            </section>
            <section>
                <input type="text" value={text} onChange={handleChangeText} />
            </section>
        </div>
    )
}

export default App

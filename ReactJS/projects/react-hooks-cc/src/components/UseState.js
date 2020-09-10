import React, {useState} from "react";

function computedInitialCount() {
	console.log('Some calculation...');
	return Math.trunc(Math.random() * 20)
}

export const UseState = () => {
	//const [count, setCount] = useState(0); //хук работает асинхронно
	/*const [count, setCount] = useState(computedInitialCount());*/ //будет рандеринг при каждом изменении стейта
	const [count, setCount] = useState(() => computedInitialCount()); //будет рандеринг только один раз
	const [state, setState] = useState({
		title: 'Counter',
		date: Date.now()
	})


	function increment () {
		/*setCount(count + 1);
		setCount(count + 1);*/ //так не будет увеличивать на 2
		setCount(prevCount => prevCount + 1);
		setCount(prevCount => prevCount + 1); //если нужно дважды вызвать одну и ту же функцию
	}
	function decrement () {
		setCount(count - 1);
	}
	function changState() {
		setState(prev => ({...prev, title: 'Test'}))
	}
	return (
		<div>
			<p className='alert alert-info mt-2' >Xук <b>useState</b> предоставляет функциональным компонентам доступ к состоянию React.</p>
			<p className='alert alert-dark'>Функция <b>useState</b> принимает только один аргумент, это начальное состояние. </p>

			<h2>Counter: {count}</h2>
			<button className='btn btn-success btn-sm mr-3'
			        onClick={increment}>Increment</button>
			<button className='btn btn-danger btn-sm mr-3'
			        onClick={decrement}>Decrement</button>
			<button className='btn btn-warning btn-sm'
			        onClick={changState}>Change state</button>
			<pre>{JSON.stringify(state, null, 2)}</pre>
		</div>
	)
}
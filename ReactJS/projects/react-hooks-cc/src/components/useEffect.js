import React, {useState, useEffect} from "react";

export const UseEffect = () => {
	const [type, setType] = useState('users');
	const [data, setData] = useState([]);
	const [pos, setPos] = useState({
		x: 0, y: 0
	})

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/${type}`)
			.then(response => response.json())
			.then(json => setData(json))
	}, [type]);

	const mouseMoveHandler = event => {
		setPos({
			x: event.clientX,
			y: event.clientY
		})
	}
	useEffect(() => {
		window.addEventListener('mousemove', mouseMoveHandler)
	}, []);
	useEffect(() => {
		console.log('Subscribe');
		return () => { console.log('Unsubscribe') }
	}, [])
	return (
		<div>
			<p className='alert alert-info mt-2'>
				С помощью хука эффекта <b>useEffect</b> вы можете выполнять побочные эффекты из функционального компонента. (запрашивать данные, делать подписки или вручную менять DOM из React-компонента)
			</p>

			<h3>📌 Source: {type}</h3>

			<button onClick={() => setType('users')}
			        className='btn btn-success btn-sm mr-2'>Users
			</button>
			<button onClick={() => setType('todos')}
			        className='btn btn-danger btn-sm mr-2'>Todos
			</button>
			<button onClick={() => setType('posts')}
			        className='btn btn-warning btn-sm mr-2'>Posts
			</button>
			{/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
			<pre>{JSON.stringify(pos, null, 2)}</pre>
		</div>
	)
}
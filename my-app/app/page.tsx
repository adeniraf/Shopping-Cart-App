'use client'
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from './hooks'
import { increment } from './features/counter/counterSlice'
import { Provider } from 'react-redux'
import { store } from './store'

export default function Home() {
	const count = useAppSelector((state) => state.counter.value)
	const dispatch = useAppDispatch()

	const handleClick = () => {
		dispatch(increment())
	}

	return (
		<>
			<h1>Count is: {`${count}`}</h1>
			<button onClick={handleClick}>+</button>
			<button>-</button>
		</>
	)
}

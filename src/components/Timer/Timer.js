import { useState, useEffect } from 'react';

const Timer = (props) => {
	const [time, setTime] = useState(0);

	useEffect(() => {
		const intervalID = setInterval(() => {
			setTime(time + 1);
		}, props.speed);

		console.log('on update', props);

		return () => {
			clearInterval(intervalID);
		};
	});

	useEffect(() => {
		console.log('Techover academy');
	}, []); //once on mount

	useEffect(() => {
		console.log('I have updated name');
	}, [props.name]); //once on mount

	return (
		<div>
			<h1>Timer</h1>
			<p>The timer has a value of {time}</p>
		</div>
	);
};

export default Timer;

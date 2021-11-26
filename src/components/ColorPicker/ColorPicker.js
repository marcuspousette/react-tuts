import { useState } from 'react';

function ColorPicker(props) {
	const [color, setColor] = useState('#ff0000');

	const updateBackground = (event) => {
		setColor(event.target.value);
		document.querySelector('body').style.backgroundColor = event.target.value;
	};

	return <input type="color" id="color-picker" name="color-picker" value={color} onChange={updateBackground} />;
}

export default ColorPicker;

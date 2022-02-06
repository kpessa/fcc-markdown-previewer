import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';

function App() {
	const [text, setText] = useState('');

	return (
		<>
			<h1>Editor</h1>
			<textarea value={text} onChange={e => setText(e.target.value)} />
			<h1>Preview</h1>
			<ReactMarkdown>{text}</ReactMarkdown>
		</>
	);
}

ReactDOM.render(<App />, document.body);

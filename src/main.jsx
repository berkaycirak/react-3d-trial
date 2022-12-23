import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FPSCounter from 'react-fps-stats';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<>
			<FPSCounter />
			<App />
		</>
	</React.StrictMode>
);

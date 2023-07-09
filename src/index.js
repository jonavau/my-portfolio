import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { router } from './rooter';
import store from './utils/store';
import { Provider } from 'react-redux';
import { ParallaxProvider } from 'react-scroll-parallax';
import './styles/globals/reset.scss';

/* persistGate va delayer le chargement jusqu'à ce que l'on récupère les data de user */

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<Provider store={store}>
		<ParallaxProvider>
			<React.StrictMode>
				<RouterProvider router={router} />
			</React.StrictMode>
		</ParallaxProvider>
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

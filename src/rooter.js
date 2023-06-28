import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './pages/error-pages';
import Home from './pages/home';

export const router = createBrowserRouter([
	{
		path: '',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
		],
	},
]);

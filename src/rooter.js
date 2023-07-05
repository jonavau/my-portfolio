import { createHashRouter } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './pages/error-pages';
import Home from './pages/home';
import Realisation from './pages/realisations';
import Contact from './pages/contact';

export const router = createHashRouter([
	{
		path: '',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/realisation',
				element: <Realisation />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
		],
	},
]);

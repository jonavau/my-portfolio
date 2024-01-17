import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './pages/error-pages';
import Home from './pages/home';
import Realisation from './pages/realisations';
import Contact from './pages/contact';
import { DetailRealisation } from './components/detailRealisation';

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
			{
				path: '/realisation',
				element: <Realisation />,
			},
			{
				path: '/realisation/:id',
				element: <DetailRealisation />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
		],
	},
]);

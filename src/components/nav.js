import { Link } from 'react-router-dom';

export default function Navigation() {
	return (
		<>
			<Link to={'/Contact'}>Contact</Link>
			<Link to={'/Realisation'}>Realisation</Link>
		</>
	);
}

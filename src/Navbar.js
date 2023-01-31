import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className='navBar'>
			<h1>Новости ОМК</h1>
			<div className='links'>
				<Link to="/">Главная</Link>
				<Link to="/create">Новая новость</Link>
			</div>
		</nav>
	);
};

export default Navbar;

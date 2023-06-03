import './Header.scss';

import { Hero, Navbar } from '../../components';

const Header = () => {
    return (
        <header className="header">
            <Navbar />
            <Hero />
        </header>
    );
};

export default Header;
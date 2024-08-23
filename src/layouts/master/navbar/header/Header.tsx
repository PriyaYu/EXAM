import { Container, Navbar } from 'react-bootstrap';
import { MasterNavbarProp } from './Header.types';

// ui components
import Logo from '../logo/Logo';
import SearchBar from '../searchbar/SearchBar';
import NavComponent from '../nav/Nav';
import './Header.css';



const Header = ({
    handleSidebar,
}: MasterNavbarProp) => {

    return (
        <Navbar id="header" className="header fixed-top d-flex align-items-center">
            <Container fluid className="d-flex align-items-center">
                {/*{logo}*/}
                <Logo handleSidebar={handleSidebar} />
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2" />
                <Navbar.Collapse id="basic-navbar-nav">                   
                    {/*{search bar}*/}
                    <SearchBar />
                    {/*{nav}*/}
                    <NavComponent />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;

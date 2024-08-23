import { Nav, NavDropdown, Badge } from 'react-bootstrap';
import './nav.css';


function Navbar() {

    return (
        <Nav className="header-nav ms-auto" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="#home" className="icon-badge">
                <i className="bi bi-bell"></i>
                <Badge pill bg="danger">9</Badge>
            </Nav.Link>
            <NavDropdown
                title={<i className="bi bi-globe"></i>}
                id="nav-dropdown-language"
                drop="down">
                <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">繁體字</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">简体字</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">
                <i className="bi bi-box-arrow-right"></i>
            </Nav.Link>
            <Nav.Link href="#profile">
                <i className="bi bi-person"></i>
            </Nav.Link>
        </Nav>
    );
};

export default Navbar;
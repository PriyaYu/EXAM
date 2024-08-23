import { Navbar, Button } from 'react-bootstrap';
import { MasterNavbarProp } from '@/layouts/master/navbar/header/Header.types';
import './logo.css';



const Logo = ({
    handleSidebar,
}: MasterNavbarProp) => {

    const handleToggleSideBar = () => {
        document.body.classList.toggle('toggle-sidebar');
    };

    const handleButtonClick = () => {
        handleSidebar;        
        handleToggleSideBar(); 
    };

    return (
        <>
            <div className="d-flex align-items-center justify-content-between">
                <Navbar.Brand
                    className="logo d-flex align-items-center"
                    href="#home"
                    color="primary"
                    onClick={(e) => e.preventDefault()}>
                    <span className="d-none d-lg-block">NEXAM</span>
                </Navbar.Brand>
                <Button
                    variant="outline-light"
                    onClick={handleButtonClick}
                >
                    <i className="bi bi-list toggle-sidebar-btn"></i>             
                </Button>
            </div>
        </>
    );
};

export default Logo;
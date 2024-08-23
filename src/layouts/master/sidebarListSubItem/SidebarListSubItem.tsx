import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { MasterSidebarListSubItemProp } from '@/layouts/master/sidebarListSubItem/SidebarListSubItem.types';




const MasterSidebarListSubItem = ({
    item: { text, path },
    active,
}: MasterSidebarListSubItemProp) => {
    return (
        <Nav className="nav-content collapsed" as="ul">
            <Nav.Item  as="li">
            <Nav.Link
                as={NavLink}
                to={path}
            >
                <span className="text">{text}</span>
                </Nav.Link>   
            </Nav.Item>
            <div className="vr-container">
                <div className="vr"></div>
            </div>
        </Nav>
    );
};

MasterSidebarListSubItem.propTypes = {
    item: PropTypes.object.isRequired,
};

export default MasterSidebarListSubItem;

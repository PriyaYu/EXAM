import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, ListGroup, Dropdown, Nav } from 'react-bootstrap';
import { MasterSidebarListItemProp } from '@/layouts/master/sidebarListItem/SidebarListItem.types';
import MasterSidebarListSubItem from '@/layouts/master/sidebarListSubItem/SidebarListSubItem';
import '@/layouts/master/sidebar/sideBar.css';



const MasterSidebarListItem = ({
    open,
    item: { text, icon, path, children, minText },
    active
}: MasterSidebarListItemProp) => {

    const isActive = (path: string) => {
        return active(path);
    };

    const isChildrenActive = (childrens: string[]) => {
        return childrens.some((children: any) => {
            return active(children.path);
        });
    };

    const [openItem, setOpenItem] = useState(false);
    const [openSubItem, setOpenSubItem] = useState(false);


    const handleClick = () => {
        if (open && openItem) {
            setOpenItem(false);
        } else if (open && !openItem) {
            setOpenItem(true);

        }
    };

    const handleSubItemClick = () => {
        if (open && openItem && openSubItem) {
            setOpenSubItem(false);
        } else if (open && openItem && !openSubItem) {
            setOpenSubItem(true);
        }
    };



    return (
        <>
            {children ? (
                <>
                    {children.length > 0 ? (
                        <>
                            <Dropdown key={text} onClick={handleClick}>
                                <Dropdown.Toggle as="div" className={`${isChildrenActive(children) ? 'active' : ''}`}>
                                    <Nav className="sidebar-nav" id="sidebar-nav" as="ul">
                                        <Nav.Item as="li" key={text}>
                                            <Nav.Link href={`#${text}`} className="collapsed">
                                                <span className="icon">{icon}</span>
                                                <span className="text">{text}</span>
                                                <>
                                                    {openItem ? (
                                                        <i className="bi bi-chevron-down"></i>
                                                    ) : (

                                                        <i className="bi bi-chevron-right"></i>
                                                    )}
                                                </>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Dropdown.Toggle>
                            </Dropdown>
                            <Collapse in={openItem}>
                                <ListGroup>
                                    {children.map((item: any) => (
                                        item.text === 'Registration' ? (
                                            <Dropdown as="div" onClick={handleSubItemClick}>
                                                <Dropdown.Toggle as="div" className={`${isChildrenActive(item.subChildren) ? 'active' : ''}`}>
                                                    <Nav className="nav-regiContent" as="ul">
                                                        <Nav.Item as="li">
                                                            <Nav.Link href="#" className="collapsed">
                                                                <span className="text">{item.text}</span>
                                                                <>
                                                                    {openSubItem ? (
                                                                        <i className="bi bi-chevron-down"></i>
                                                                    ) : (

                                                                        <i className="bi bi-chevron-right"></i>
                                                                    )}
                                                                </>
                                                            </Nav.Link>
                                                        </Nav.Item>
                                                        <div className="vr-container">
                                                            <div className="vr"></div>
                                                        </div>
                                                    </Nav>
                                                </Dropdown.Toggle>

                                                {openSubItem && (
                                                    <div>
                                                        {item.subChildren?.map((subChild: any) => (
                                                            <Nav className="nav-subContent" as="ul">
                                                                <Nav.Item as="li">
                                                                    <Nav.Link
                                                                        as={NavLink}
                                                                        to={subChild.path}
                                                                        key={subChild.uuid}
                                                                        onClick={e => e.stopPropagation()}
                                                                    >
                                                                        <span className="text">{subChild.text}</span>
                                                                    </Nav.Link>
                                                                   
                                                                </Nav.Item>
                                                                <div className="vr-container">
                                                                    <div className="vr"></div>
                                                                </div>
                                                            </Nav>
                                                        ))}
                                                    </div>
                                                )}
                                            </Dropdown>
                                        ) : (
                                            <MasterSidebarListSubItem
                                                parentPath={path}
                                                item={item}
                                                key={item.uuid}
                                                active={isActive(item.path)}
                                            />
                                        )
                                    ))}
                                </ListGroup>
                            </Collapse>
                        </>

                    ) : (
                        ''
                    )}
                </>
            ) : (
                <Nav className="sidebar-nav" id="sidebar-nav" as="ul">
                    <Nav.Item as="li">
                        <Nav.Link as={NavLink} to={path} className="collapsed">
                            <span className="icon">{icon}</span>
                            <span className="text">{text}</span>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            )}
        </>
    );
};

export default MasterSidebarListItem;
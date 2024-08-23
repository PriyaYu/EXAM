import './breadcrumb.css';
import { Breadcrumb } from 'react-bootstrap';

function Bread({ page }: any) {

    return (
        <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item href="/">
                <i className="bi bi-house-door"></i>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
                <li className="breadcrumb-item active">{page}</li>
            </Breadcrumb.Item>
        </Breadcrumb>
    );
};

export default Bread;
import { Card } from 'react-bootstrap';
import LockIcon from '@mui/icons-material/Lock';

export default function AccountCard() {

    return (
        <Card className="card-account text-center">
            <Card.Img variant="top" src="./public/products/product_7.jpg" />
            <Card.Body>
                <Card.Title className="name text-primary">Elissa Lui</Card.Title>
                <Card.Text>
                    <span className="mail">Elissa57@hotmail.com</span>

                    <div>
                        <LockIcon />
                        <span style={{ color:'#82868D'}}>●●●●●●</span>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};
import { Card } from 'react-bootstrap';


export default function UpcomingImgCard() {

    return (
        <Card className="w-100">
            <Card.Img src="./public/products/product_6.jpg"
                style={{
                    height: '100%',
                    objectFit: 'cover'
                }} />
        </Card>
    );
};
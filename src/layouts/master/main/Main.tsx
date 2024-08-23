import { Container } from 'react-bootstrap';
import './main.css';



function Main({ children }: any) {

    return (
        <main id="main" className="main">
            <Container fluid>
                {children}
            </Container>
        </main>
    );
};

export default Main;
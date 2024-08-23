import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useTranslation } from "react-i18next";


export default function Step1(props: {
    handleNext: () => void;
    handlePrevious: () => void;
    handleChange: (e: any, key: any) => void;
    metaData: any;
}) {
    const { t } = useTranslation();


    return (
        <Container fluid>
            <Row>
                <Col md="12">
                    <Card>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <div className="btn-group d-flex aligm-items-center gap-2 mb-3">
                        <Button className="w-100" variant="outline-primary" size="lg"
                            onClick={props.handlePrevious}
                        >
                            {t("assessment.registration.registerExam.buttons.back")}
                        </Button>
                        <Button className="w-100" variant="primary" size="lg"
                            onClick={props.handleNext}
                        >
                            {t("assessment.registration.registerExam.buttons.next")}
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>

    );
};


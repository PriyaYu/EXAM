import { Container, Row, Col, Form, Image, Button } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import { Props } from './Step1.types';

export default function Step1({ selectData, metaData, handleChange, handleNext }: Props) {
    const { t } = useTranslation();

    const handleSubmit = (event: any) => {
        event.preventDefault();
        // handle form submission
    };


    return (
        <Container fluid className="register-form">
            <Row className="h-100">
                <Col md={6} className="d-flex flex-column justify-content-center">
                    <div className="text-center text-md-start">
                        <h2>{t("assessment.registration.registerExam.title")}</h2>
                        <p>{t("assessment.registration.registerExam.subTitle")}</p>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formAssessment" className="mb-3">
                            <Form.Label>{t('assessment.registration.registerExam.fields.assessment')}</Form.Label>
                            <Form.Select
                                aria-label="Assessment"
                                value={selectData.assessment || ''}
                                onChange={(e) => handleChange(e, 'assessment')}
                            >
                                <option>-Select Assessment-</option>
                                {metaData.assessments.map((assessment: any) => (
                                    <option key={assessment.id} value={assessment.id}>
                                        {assessment.name}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group controlId="formLanguage" className="mb-3">
                            <Form.Label>{t('assessment.registration.registerExam.fields.language')}</Form.Label>
                            <Form.Select
                                aria-label="Language"
                                value={selectData.language || ''}
                                onChange={(e) => handleChange(e, 'language')}
                            >
                                <option>-Select Language-</option>
                                {metaData.language.map((language: any) => (
                                    <option key={language.id} value={language.id}>
                                        {language.name}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group controlId="formLocation" className="mb-3">
                            <Form.Label>{t('assessment.registration.registerExam.fields.location')}</Form.Label>
                            <Form.Select
                                aria-label="Location"
                                value={selectData.location || ''}
                                onChange={(e) => handleChange(e, 'location')}
                            >
                                <option>-Select Location-</option>
                                {metaData.location.map((location: any) => (
                                    <option key={location.id} value={location.id}>
                                        {location.name}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Form>
                    <div className="btn-group d-flex aligm-items-center gap-2 mb-3">
                        <Button className="w-100" variant="primary" size="lg"
                            onClick={handleNext}
                        >
                            {t("assessment.registration.registerExam.buttons.next")}
                        </Button>
                    </div>
                    <span>{t("assessment.registration.registerExam.note")}</span>
                </Col>
                <Col md={6} className="p-0">
                    <Image src="/products/img_1.jpg" fluid rounded className="image-cover" />
                </Col>
            </Row>
        </Container>
    );
};


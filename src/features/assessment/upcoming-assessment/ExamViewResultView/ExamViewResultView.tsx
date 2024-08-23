import { useNavigate, useParams } from 'react-router-dom';
import { Container, Button, Image } from 'react-bootstrap';
import { useTranslation } from "react-i18next";


export default function ExamResultView() {
    const { t } = useTranslation();
    const navigate = useNavigate();


    const handleBack = () => {
        navigate('/dashboard')
    };
    //const handleView = () => {
    //    navigate(`/assessment/upcoming-assessment/exam/view-result`)
    //};

    const handleCertificate = () => {
        navigate(`/assessment/upcoming-assessment/exam/certificate`)
    };

    const handleViewAll = () => {
        navigate(`/assessment/upcoming-assessment/exam/view-all-results`)
    };



    return (
        <Container
            fluid
            className="d-flex justify-content-center align-items-center container-fluid1">
            <div className="exam-view-result">
                <h3>{t('examResult.title')}</h3>
                <Image src="/products/img_2.jpg" fluid rounded className="image mb-3" />
                <div className="d-flex justify-content-between align-items-center">
                    <div className="title-1">
                        <h6 className="title">{t('examResult.Status')}:</h6>
                        <h6 className="title">{t('examResult.Correct')}:</h6>
                        <h6 className="title">{t('examResult.time')}:</h6>
                        <h6 className="title">{t('examResult.date')}:</h6>
                        <h6 className="title">{t('examResult.attemp')}:</h6>
                    </div>
                    <div className="content-1">
                        <h6 className="content">Pass</h6>
                        <h6 className="content">Pass</h6>
                        <h6 className="content">Pass</h6>
                        <h6 className="content">Pass</h6>
                        <h6 className="content">Pass</h6>
                    </div>
                </div>
                <div className="btn-group d-flex align-items-center gap-2 mb-3">
                    <Button className="w-100" variant="primary" size="lg" onClick={handleBack}>
                        {t("common.button.backto")}
                    </Button>
                    <Button className="w-100" variant="primary" size="lg" onClick={handleCertificate}>
                        {t("common.button.certificate")}
                    </Button>
                    <Button className="w-100" variant="primary" size="lg" onClick={handleViewAll}>
                        {t("common.button.all")}
                    </Button>
                </div>
            </div>
        </Container>
    );
};




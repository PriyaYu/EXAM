import { useNavigate, useParams } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { useTranslation } from "react-i18next";



export default function ExamFinishView() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { uId } = useParams();

    const handleBack = () => {
        navigate(`/dashboard`)
    };

    const handleView = () => {
        navigate(`/assessment/upcoming-assessment/exam/view-result/${uId}`)
    };


    return (
        <Container fluid className="d-flex flex-column justify-content-center"> 
            <div className="exam-finish text-center align-items-center">
                <h3>{t('examfinish.title')}</h3>
                <h4>{t('examfinish.note')}</h4>
                <p>{t('examfinish.content')}</p>
            </div>
            <div className="btn-group d-flex aligm-items-center gap-2 mb-3">
                <Button className="w-100" variant="primary" size="lg" onClick={handleView}>
                    {t("common.button.view")}
                </Button>
                <Button className="w-100" variant="primary" size="lg" onClick={handleBack}>
                    {t("common.button.backto")}
                </Button>
                </div>
        </Container>
    );
};
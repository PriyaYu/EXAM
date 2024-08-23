import { Button, Modal } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import axios from 'axios';


const ModalComponent = ({ show, answers }: { show: boolean; answers: Record<string, any> }) => {
    const { t } = useTranslation();

    const handleSubmit = async () => {
        try {
            const response = await axios.post('/api/rest', {
                headers: {
                    'APIKey': 'fdddd1dc3cef22ec6214b9734c8c0fece55c7120464eae94bc55b33f5a0326ab',
                    "Content-Type": "application/json; charset=utf-8",
                },
                params: {
                    action: 'cc52055f-93cf-4a3d-8cc2-b340def823fc',
                    answers: JSON.stringify(answers)
                }
            });

            const uid = response.data;
            navigate(`/assessment/upcoming-assessment/exam/finish/${uid}`);
        }
        catch (err: any) {
            console.error('Failed to fetch page data', err);
        }      
    };

    return (
        <>
            <Modal
                centered
                show={show}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header>
                    <Modal.Title>{t("model.title")}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <div style={{ fontSize: '40px', fontWeight: '600', lineHeight: '120%', color:'#B82E2E' }}>00:00</div>
                    {t("model.content")}
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <Button variant="primary" onClick={handleSubmit}>{t("common.button.submit")}</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalComponent;
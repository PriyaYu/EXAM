import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, ProgressBar, Button } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ExamTestList from '@/_mock/examTestList.json'; // 模擬的測試數據


interface ExamTestProps {
    title: string;
    description: string;
    questions: any[];
}

export default function ExamView() {
    const { id } = useParams();
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [examData, setExamData] = useState<ExamTestProps>({
        title: '',
        description: '',
        questions: []
    });
    const percentage = 100;


    useEffect(() => {
        if (id) {
            const fetchExamData = async () => {
                try {
                    setExamData(ExamTestList); 
                } catch (err: any) {
                    console.error('Failed to fetch exam data', err);
                }
            };

            fetchExamData();
        }
    }, [id]);



    const handleStart = () => {
        navigate(`/assessment/upcoming-assessment/exam/test/${id}`);
    };

    const handleBack = () => {
        navigate(`/assessment/upcoming-assessment`);
    };
  
    
    return (
        <Container fluid>
            <div className="exam-start">
                <ProgressBar animated now={0} className="mb-4" />
                <div className="d-flex align-items-center justify-content-between">
                    <h2>{examData.title}</h2>
                    <div className="circle-progressbar">
                        <CircularProgressbar
                            value={percentage}
                            text='30:00'
                            styles={buildStyles({
                                pathColor: '#E9ECEF',
                                textColor: '#495057',
                                trailColor: '#006c69',
                                backgroundColor: '#fff',
                                rotation: 1.0,
                                textSize: '20px'
                            })}
                        />
                    </div>
                </div>
                <p className="mt-3">{examData.description}</p>
            </div>
            <div className="btn-group d-flex aligm-items-center gap-2 mb-3">
                <Button className="w-100" variant="outline-primary" size="lg"
                    onClick={handleBack}
                >
                    {t("common.button.back")}
                </Button>
                <Button className="w-100" variant="primary" size="lg"
                    onClick={handleStart}
                >
                    {t("common.button.start")}
                </Button>
            </div>
        </Container>
    );
}
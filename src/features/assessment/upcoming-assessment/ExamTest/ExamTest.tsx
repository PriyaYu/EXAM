import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Row, Col, ProgressBar, Button } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import axios from "axios";
import Exambar from '@/features/assessment/upcoming-assessment/Exambar/Exambar';
import ExamQuestion from '@/components/ExamQuestion/ExamQuestion';
import ModalComponent from '@/components/ModalComponent/ModalComponent';

interface ExamTestProps {
    title: string;
    description: string;
    questions: {
        id: number;
        type: string;
        questionText: string;
        options: {
            id: string;
            text: string;
        }[];
        isMultiSelect: boolean;
    }[];
}

export default function ExamTest() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [examData, setExamData] = useState<ExamTestProps>({
        title: 'CRE Chinese Test',
        description: 'The CRE Chinese Test assesses your proficiency in the Chinese language across reading, writing, listening, and speaking skills. To ensure the security and integrity of the exam, you must use the SAFT exam browser, which can be downloaded from the official CRE website. This secure browser creates a controlled testing environment to protect your results. The total test duration is 2 hours. Be sure to review the exam guidelines carefully and familiarize yourself with the SAFT browser prior to your test date. With diligent preparation, you can demonstrate your Chinese language abilities with confidence. Good luck!',
        questions: []
    });

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<string, any>>({});
    const [taggedQuestions, setTaggedQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showTimeoutMessage, setShowTimeoutMessage] = useState(false);

    const [timeLeft, setTimeLeft] = useState(60);
    const [percentage, setPercentage] = useState(0);
    const [timeStarted, setTimeStarted] = useState(false);
   

    useEffect(() => {
        const fetchExamData = async () => {
            try {
                const response = await axios.get('/api/rest', {
                    headers: {
                        'APIKey': 'fdddd1dc3cef22ec6214b9734c8c0fece55c7120464eae94bc55b33f5a0326ab'
                    },
                    params: {
                        action: '43771c8b-b211-4866-9631-f20c22710ef5'
                    }
                });
                const formattedQuestions = response.data.map((q: any) => ({
                    id: q.Id,
                    type: q.Type,
                    questionText: q.Question,
                    options: q.Options.map((opt: any) => ({
                        id: opt.value,
                        text: opt.content
                    })),
                    isMultiSelect: q.IsMultiSelect
                }));

                setExamData(prevData => ({
                    ...prevData,
                    questions: formattedQuestions
                }));

                setLoading(false);
                setTimeStarted(true);
            } catch (err: any) {
                console.error('Failed to fetch page data', err);
                setLoading(false);
            }
        };

        fetchExamData();
    }, []);

    useEffect(() => {
        const updateTimeLeft = () => {
            setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
        };

        if (timeStarted) {
            const timeoutId = setTimeout(() => {
                updateTimeLeft();
            }, 1000);

            return () => clearTimeout(timeoutId);
        }
    }, [timeLeft, timeStarted]);

    useEffect(() => {
        if (timeStarted) {
            const totalTime = 1800;
            const elapsedTime = totalTime - timeLeft;
            setPercentage((elapsedTime / totalTime) * 100);
        }
    }, [timeLeft, timeStarted]);

    useEffect(() => {
        if (timeLeft === 0) {
            setTimeStarted(false);
            setShowTimeoutMessage(true);
        }
    }, [timeLeft]);

    const handleAnswerChange = (questionId: string, event: any, isMultiSelect: boolean) => {
        const { value } = event.target;
        setAnswers(prevAnswers => {
            if (isMultiSelect) {
                const options = prevAnswers[questionId] || [];
                return {
                    ...prevAnswers,
                    [questionId]: options.includes(value)
                        ? options.filter((id: string) => id !== value)
                        : [...options, value]
                };
            } else {
                return {
                    ...prevAnswers,
                    [questionId]: value
                };
            }
        });
    };

    const handleNext = () => {
        setCurrentQuestionIndex(prevIndex => Math.min(prevIndex + 1, examData.questions.length - 1));
    };

    const handleBack = () => {
        if (currentQuestionIndex === 0) {
            navigate(`/assessment/upcoming-assessment/exam/${id}`)
        }
        else {
            setCurrentQuestionIndex(prevIndex => Math.max(prevIndex - 1, 0));
        }
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('/api/rest', {
                headers: {
                    'APIKey': 'fdddd1dc3cef22ec6214b9734c8c0fece55c7120464eae94bc55b33f5a0326ab',
                    "Content-Type": "multipart/form-data",
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

    const handleSelectQuestion = (index: any) => {
        setCurrentQuestionIndex(index);
    };

    const handleTagClick = (index: any) => {
        setTaggedQuestions((prevTags: any) =>
            prevTags.includes(index) ? prevTags.filter((tag: any) => tag !== index) : [...prevTags, index]
        );
    };


    const progress = ((currentQuestionIndex + 1) / examData.questions.length) * 100;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const pathColor = timeLeft <= 120 ? '#ff0000' : '#006c69';
    const currentQuestion = examData.questions[currentQuestionIndex];

    return (

        <Container fluid>
            {loading ? (
                <div className="text-center">Loading...</div>
            ) : (
                <>
                    {showTimeoutMessage && (
                            <ModalComponent show={showTimeoutMessage} answers={answers}  />
                    )}


                    <div className="exam">
                        <div className="exam-bar">
                            <Exambar
                                questions={examData.questions}
                                currentQuestionIndex={currentQuestionIndex}
                                onSelectQuestion={handleSelectQuestion}
                                onTagClick={handleTagClick}
                                taggedQuestions={taggedQuestions}
                            />
                        </div>

                        <div className="exam-test">
                            <ProgressBar animated now={progress} label={`${progress.toFixed(0)}%`} className="mb-4" />
                            <div className="d-flex align-items-center justify-content-between">
                                <h2>{examData.title}</h2>

                                <div className="circle-progressbar">
                                    <CircularProgressbar
                                        value={percentage}
                                        text={`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
                                        styles={buildStyles({
                                            pathColor: pathColor,
                                            textColor: '#495057',
                                            textSize: '20px'
                                        })}
                                    />
                                </div>
                            </div>

                            <Row className="mt-4 align-items-center justify-content-center">
                                <Col md="12" className="mb-5">
                                    {examData.questions.length > 0 && currentQuestion && (
                                        <ExamQuestion
                                            key={currentQuestion.id}
                                            question={currentQuestion}
                                            onAnswerChange={(answer: any) => handleAnswerChange(currentQuestion.id, answer, currentQuestion.isMultiSelect)}
                                            answers={answers}
                                        />
                                    )}
                                </Col>
                            </Row>

                            <div className="btn-group d-flex aligm-items-center gap-2 mb-3">
                                <Button className="w-100" variant="outline-primary" size="lg"
                                    onClick={handleBack}
                                >
                                    {t("common.button.back")}
                                </Button>
                                {currentQuestionIndex === examData.questions.length - 1 ? (
                                    <Button className="w-100" variant="primary" size="lg" onClick={handleSubmit}>
                                        {t("common.button.submit")}
                                    </Button>
                                ) : (
                                    <Button className="w-100" variant="primary" size="lg" onClick={handleNext}>
                                        {t("common.button.next")}
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Container>
    );
};
import { AssessmentCardProp } from '@/features/assessment/upcoming-assessment/AssessmentCard/AssessmentCard.types';
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AssessmentCard = ({ assessment, examNo }: AssessmentCardProp) => {
    const navigate = useNavigate();

    const goExamTest = () => {
        navigate(`/assessment/upcoming-assessment/exam/${examNo}`);
    };

    return (
        <Card
            className="card-upcomingAssessment"
            style={{ cursor: 'pointer' }}
            onClick={goExamTest}>
            <Card.Body>
                <Card.Img src={assessment.cover} />
                <div className="content">
                    <Card.Subtitle className="subtitle">{assessment.subtitle}</Card.Subtitle>
                    <Card.Title className="title">{assessment.title}</Card.Title>
                    <Card.Text className="text">
                        {assessment.date}
                    </Card.Text>
                </div>
            </Card.Body>
        </Card>
    );
};

export default AssessmentCard;
import { LatestCourseCardProp } from '@/features/dashboard/LatestCourseCard/LatestCourseCard.types';
import { Card } from "react-bootstrap";

const LatestCourseCard = ({ course }: LatestCourseCardProp) => {


    return (
        <Card className="card-course">
            <Card.Img variant="top" src={course.cover} />
            <Card.Body>
                <div className="content">
                <Card.Subtitle className="subtitle">{course.subtitle}</Card.Subtitle>
                <Card.Title className="title">{course.title}</Card.Title>
                <Card.Text className="text">
                    {course.date}
                    </Card.Text>
                </div>
            </Card.Body>
        </Card>
    );
};

export default LatestCourseCard;
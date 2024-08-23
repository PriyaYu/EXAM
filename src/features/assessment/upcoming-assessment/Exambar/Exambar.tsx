import { ListGroup, Button } from 'react-bootstrap';

const Exambar = ({ questions, currentQuestionIndex, onSelectQuestion, onTagClick, taggedQuestions }:any) => {
    return (
        <div className="exam-bar-content">
            <ListGroup>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                    <span className="title">Introduction</span>
                    <i className="bi bi-caret-right-fill text-primary"></i> 
                </ListGroup.Item>


                {questions.map((question: any, index: any) => (
                    <ListGroup.Item
                        key={index}
                        onClick={() => onSelectQuestion(index)}
                        className={`d-flex justify-content-between align-items-center qText-list ${index === currentQuestionIndex ? 'active' : ''}`}
                    >
                        <span className="qnumber me-3">{index + 1}</span>
                        <span className="qtext">{question.questionText.replace(/<\/?[^>]+(>|$)/g, "")}</span>
                        <Button variant="outline-light"
                            onClick={(e) => {
                            e.stopPropagation();
                            onTagClick(index);
                        }}>
                            {taggedQuestions.includes(index) ?
                             <i className="bi bi-bookmark-fill" style={{ color: '#006c69' }}></i> :
                             <i className="bi bi-bookmark" style={{ color: '#006c69' }}></i>}

                        </Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};

export default Exambar;
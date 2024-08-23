const ExamQuestion = ({ question, onAnswerChange, answers }: any) => {
    const alphabet = ['A', 'B', 'C', 'D'];

    switch (question.type) {
        case 'mc':
            return (
                <div className="e-question">
                    <h3 dangerouslySetInnerHTML={{ __html: question.questionText }} />
                    {question.options.map((option: any) => (
                        <div key={option.id} className="d-flex align-items-center">
                            <label>
                                <input
                                    type={question.isMultiSelect ? "checkbox" : "radio"}
                                    name={`question-${question.id}`}
                                    value={option.id}
                                    checked={question.isMultiSelect
                                        ? (answers[question.id] || []).includes(option.id)
                                        : answers[question.id] === option.id}
                                    onChange={onAnswerChange}
                                />
                                <span className="me-2 ms-2 alphabet">{alphabet[option.id - 1] + '.'}</span>
                                {option.text}
                            </label>
                        </div>
                    ))}
                </div>
            );
        case 'truefalse':
            return (
                <div className="e-question">
                    <h3 dangerouslySetInnerHTML={{ __html: question.questionText }} />
                    {question.options.map((option: any) => (
                        <div key={option.id}>
                            <label>
                                <input
                                    type="radio"
                                    name={`question-${question.id}`}
                                    value={option.id}
                                    checked={answers[question.id] === option.id}
                                    onChange={onAnswerChange}
                                />
                                {option.text}
                            </label>
                        </div>
                    ))}
                </div>
            );
        default:
            return null;
    }
};

export default ExamQuestion;
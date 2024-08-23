import { Alert } from 'react-bootstrap';


export default function WeeklyActivityCard() {

    return (
        <div className="card-weekly">
            <Alert className="bg-primary text-white">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <Alert.Heading>One Off Training</Alert.Heading>
                        <p className="text">you have done</p>
                    </div>
                    <div className="number">30</div>
                </div>
            </Alert>
            <Alert className="bg-primary text-white">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <Alert.Heading>Regular Training</Alert.Heading>
                        <p className="text">you have done</p>
                    </div>
                    <div className="number">5</div>
                </div>
            </Alert>
            <Alert className="bg-primary text-white">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <Alert.Heading>Assesstment</Alert.Heading>
                        <p className="text">you have done</p>
                    </div>
                    <div className="number">1</div>
                </div>
            </Alert>
        </div>
    );
};
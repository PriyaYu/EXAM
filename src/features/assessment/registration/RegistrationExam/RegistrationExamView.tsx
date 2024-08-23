import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Spinner, Stack} from 'react-bootstrap';
import { dropdownListProp } from '@/features/assessment/registration/RegistrationExam/Step1/Step1.types';
import dropdownList from '@/_mock/dropdownList.json'; //test list
import Step1 from './Step1/Step1';
import Step2 from './Step2/Step2';


export default function RegistrationExamView() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [selectData, setSelectData] = useState({
        assessment: '',
        language: '',
        location: ''
    });
    const [metaData, setMetaData] = useState<dropdownListProp>({
        assessments: [],
        language: [],
        location: []
    });

    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>, type: string) => {
        const { value } = e.target;
        setSelectData(prevState => ({
            ...prevState,
            [type]: value 
        }));
    };
    
    const fetchData = async () => {
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));

            setMetaData({
                assessments: dropdownList.assessments,
                language: dropdownList.language,
                location: dropdownList.location
            });
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setIsLoading(false);
        }
    };
        
    useEffect(() => {
        fetchData();

    }, []);

    if (isLoading) {
        return (
            <Stack style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
             <Spinner animation="border" />
            </Stack>
        );
    }

    return (
        <>
            {step === 1 &&
                <Step1
                metaData={metaData}
                handleNext={handleNext}
                handleChange={handleChange}
                selectData={selectData}
                />
            }

            {
                step === 2 &&
                <Step2
                    metaData={metaData}
                    handlePrevious={handlePrevious}
                    handleNext={handleNext}
                    handleChange={handleChange}
                />
            }
        </>
    );
};
import { lazy } from "react";
import { Loadable } from "@/components/Loadable";




const RegistrationExamPage = Loadable(
    lazy(() => import("@/pages/assessment/registration/RegistrationExam/RegistrationExamPage"))
);

const RegistrationRecordPage = Loadable(
    lazy(() => import("@/pages/assessment/registration/RegistrationRecord/RegistrationRecordPage"))
);

const UpcomingAssessmentPage = Loadable(
    lazy(() => import("@/pages/assessment/upcoming-assessment/UpcomingAssessmentPage/UpcomingAssessmentPage"))
);

const ExamPage = Loadable(
    lazy(() => import("@/pages/assessment/upcoming-assessment/ExamPage/ExamPage"))
);

const ExamTestPage = Loadable(
    lazy(() => import("@/pages/assessment/upcoming-assessment/ExamTestPage/ExamTestPage"))
);

const ExamFinishPage = Loadable(
    lazy(() => import("@/pages/assessment/upcoming-assessment/ExamFinishPage/ExamFinishPage"))
);

const ExamViewResultPage = Loadable(
    lazy(() => import("@/pages/assessment/upcoming-assessment/ExamViewResultPage/ExamViewResultPage"))
);

const ExamViewAllResultPage = Loadable(
    lazy(() => import("@/pages/assessment/upcoming-assessment/ExamViewAllResultPage/ExamViewAllResultPage"))
);

const ExamViewCertificatePage = Loadable(
    lazy(() => import("@/pages/assessment/upcoming-assessment/ExamViewResultPage/ExamViewResultPage"))
);


const AssessmentRoutes = {
    path: "assessment",
    children: [
        {
            path: "registration/register-exam",
            children: [
                {
                    element: <RegistrationExamPage />,
                    index: true,
                },
                {
                    path: ":id",
                    children: [
                        {
                            path: "edit",
                            //element: <RegistrationExamEditPage />,
                            index: true,
                        },
                    ],
                },
            ],
        },
        {
            path: "registration/registration-record",
            children: [
                {
                    element: <RegistrationRecordPage />,
                    index: true,
                },
                {
                    path: ":id",
                    children: [
                        {
                            path: "edit",
                            //element: <RegistrationRecordEditPage />,
                            index: true
                        },
                    ],
                }
            ]
        },
        {
            path: "upcoming-assessment",
            children: [
                {
                    element: <UpcomingAssessmentPage />,
                    index: true
                },
                {
                    path: "exam",
                    children: [
                        {
                            path: ":id",
                            element: <ExamPage />,
                            index: true
                        },
                        {
                            path: "test/:id",
                            element: <ExamTestPage />,
                            index: true
                        },
                        {
                            path: "finish/:uid",
                            element: <ExamFinishPage />,
                            index: true
                        },
                        {
                            path: "view-result/:uid",
                            element: <ExamViewResultPage />,
                            index: true
                        },
                        {
                            path: "view-all-results/:uid",
                            element: <ExamViewAllResultPage />,
                            index: true
                        },
                        {
                            path: "certificate/:uid",
                            element: <ExamViewCertificatePage />,
                            index: true
                        },
                    ],
                },
            ],
        },
    ],
};

export default AssessmentRoutes;

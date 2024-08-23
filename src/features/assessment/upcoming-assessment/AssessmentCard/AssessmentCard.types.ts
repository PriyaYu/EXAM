export interface Assessment {
    id: number,
    subtitle: string,
    title: string,
    cover: string,
    date: string
};

export interface AssessmentCardProp {
    assessment: Assessment;
    examNo: number;
};
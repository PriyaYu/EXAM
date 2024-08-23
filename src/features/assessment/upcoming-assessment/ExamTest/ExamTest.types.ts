export interface Props {
    selectData: any;
    metaData: any;
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>, type: string) => void;
    handleNext: () => void;
};

export interface DropdownOption {
    id: number;
    name: string;
};

export interface dropdownListProp {
    assessments: DropdownOption[],
    language: DropdownOption[],
    location: DropdownOption[],
};
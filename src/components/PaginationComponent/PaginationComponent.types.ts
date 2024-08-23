export interface PaginationComponentProps {
    pageTotalCount: number;
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
    onPageSizeChange: (size: number) => void;
    onGoPage: (page: number) => void;
};

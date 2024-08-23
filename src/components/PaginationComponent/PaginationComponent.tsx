import { Pagination, Form } from 'react-bootstrap';
import { useState } from 'react';
import { PaginationComponentProps } from '@/components/PaginationComponent/PaginationComponent.types';



const PaginationComponent = ({
    pageTotalCount,
    totalPages,
    currentPage,
    onPageChange,
    onPageSizeChange,
    onGoPage,
}: PaginationComponentProps) => {

    const [pageSize, setPageSize] = useState(8);
    const [goPage, setGoPage] = useState('');

    const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const size = Number(e.target.value);
        setPageSize(size);
        onPageSizeChange(size);
    };

    const handleGoPage = () => {
        const pageNumber = Number(goPage);
        if (!isNaN(pageNumber)) {
            onGoPage(pageNumber);
        }
    };

    const keyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleGoPage();
        }
    };

    const renderPaginationItems = () => {
        let items = [];

        // Show first 5 pages
        for (let page = 1; page <= Math.min(totalPages, 5); page++) {
            items.push(
                <Pagination.Item
                    key={page}
                    active={currentPage === page}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </Pagination.Item>
            );
        }

        // Add ellipsis if there are more pages between the first 5 and the last page
        if (totalPages > 5) {
            items.push(<Pagination.Ellipsis key="ellipsis-1" />);
        }

        // Show last page if it's not already shown
        if (totalPages > 5) {
            items.push(
                <Pagination.Item
                    key={totalPages}
                    active={currentPage === totalPages}
                    onClick={() => onPageChange(totalPages)}
                >
                    {totalPages}
                </Pagination.Item>
            );
        }

        return items;
    };

    return (
        <>
            <div className="d-flex align-items-center gap-5">
                <div className="">Total {pageTotalCount} items</div>
                <div className="d-flex align-items-center flex-grow-1">
                    <Pagination className="mb-0">
                        <Pagination.Prev
                            className={currentPage === 1 ? 'prev disabled' : 'prev'}
                            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                        />
                        {renderPaginationItems()}
                        <Pagination.Next
                            className={currentPage === totalPages ? 'disabled next' : 'next'}
                            onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
                        />
                    </Pagination>
                </div>
                <div className="d-flex align-items-center gap-3">
                    <Form.Select
                        value={pageSize}
                        onChange={handlePageSizeChange}
                        className="me-2"
                    >
                        <option value="8">8 / page</option>
                        <option value="10">10 / page</option>
                        <option value="20">20 / page</option>
                    </Form.Select>
                    <div className="text-nowrap me-2">Go to</div>
                    <Form.Control
                        className="w-50 me-2"
                        type="text"
                        value={goPage}
                        onChange={(e) => setGoPage(e.target.value)}
                        onKeyDown={keyDown}
                    />
                </div>
            </div>
        </>
    );
};

export default PaginationComponent;
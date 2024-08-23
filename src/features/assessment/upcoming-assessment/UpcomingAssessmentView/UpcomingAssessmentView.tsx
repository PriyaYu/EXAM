import { useEffect, useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import AssessmentCard from '@/features/assessment/upcoming-assessment/AssessmentCard/AssessmentCard';
import PaginationComponent from '@/components/PaginationComponent/PaginationComponent';
import { TakingExamTest } from '@/_mock/TakingExamTest'; //test list


export default function UpcomingAssessmentView() {
    const { t } = useTranslation();
    const [totalPages, setTotalPages] = useState(1);
    const [pageTotalCount, setPageTotalCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(8);



    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, TakingExamTest.length);



    useEffect(() => {
        const fetchPageData = async () => {
            try {
                setPageTotalCount(TakingExamTest.length);
                setTotalPages(Math.ceil(TakingExamTest.length / pageSize));
            } catch (error) {
                console.error('Failed to fetch page data', error);
            }
        };

        fetchPageData();
    }, [pageSize, currentPage]);

    const handlePageChange = (pageNumber: number) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const handlePageSizeChange = (size: number) => {
        setPageSize(size);
    };

    const handleGoPage = (pageNumber: number) => {
        handlePageChange(pageNumber);
    };

  

    return (
        <Container fluid>
            <Row>
                <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="vr"></div>
                    <h4>{t("assessment.upcomingAssessment.title")}</h4>

                    <div className="d-flex align-items-center ms-auto mb-3">
                        <span className="me-2 text-nowrap">Sort by</span>
                        <Form.Select>
                            <option>Newest First</option>
                            <option>Newest First1</option>
                            <option>Newest First2</option>
                        </Form.Select>
                    </div>
                </div>

                {TakingExamTest.slice(startIndex, endIndex).map((assessment, index) => (
                    <Col lg="3" md="3" key={index} className="mb-3">
                        <AssessmentCard assessment={assessment} examNo={index} />
                    </Col>
                ))}
            </Row>

            <hr className="mt-0" />

            <Row>
                <Col sm={12} md={12}>
                    <PaginationComponent
                        pageTotalCount={pageTotalCount}
                        totalPages={totalPages}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                        onPageSizeChange={handlePageSizeChange}
                        onGoPage={handleGoPage}
                    />
                </Col>
            </Row>
        </Container>
    );
};
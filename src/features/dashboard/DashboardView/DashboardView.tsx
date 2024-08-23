import LatestCourseCard from '@/features/dashboard/LatestCourseCard/LatestCourseCard';
import UpcomingAssessmentCard from '@/features/dashboard/UpcomingAssessmentCard/UpcomingAssessmentCard';
import UpcomingImgCard from '@/features/dashboard/UpcomingAssessmentCard/UpcomingImgCard';
import AccountCard from '@/features/dashboard/AccountCard/AccountCard';
import WeeklyActivityCard from '@/features/dashboard/WeeklyActivityCard/WeeklyActivityCard';
import { LatestCourseTest } from '@/_mock/LatestCourseTest'; //test list
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from "react-i18next";

export default function DashboardView() {
    const { t } = useTranslation();

    return (
        <Container fluid>
            <Row>
                <span className="dashboard-title text-primary">{t("dashboard.latestCourse.title")}</span>
                {LatestCourseTest.map((course, index) => (
                    <Col lg="3" md="6" key={index} className="mb-3">
                        <LatestCourseCard course={course} />
                    </Col>
                ))}
            </Row>
            <Row>
                <Col lg="6" md="6">
                    <Row className="g-0">
                        <span className="dashboard-title text-primary">{t("dashboard.upcomingAssessment.title")}</span>
                        <Col>
                            <UpcomingAssessmentCard />
                        </Col>
                        <Col className="d-flex align-items-stretch">
                            <UpcomingImgCard />
                        </Col>
                    </Row>
                </Col>
                <Col lg="3" md="6">
                    <span className="dashboard-title text-primary">{t("dashboard.account.title")}</span>
                    <AccountCard />
                </Col>
                <Col lg="3" md="6">
                    <span className="dashboard-title text-primary">{t("dashboard.weeklyActivity.title")}</span>
                    <WeeklyActivityCard />
                </Col>
            </Row>
        </Container>
    );
};


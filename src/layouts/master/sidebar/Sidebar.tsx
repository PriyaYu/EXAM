import { matchPath, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { TMenuItem } from '@/layouts/master/sidebarListItem/SidebarListItem.types';
import MasterSidebarListItem from '@/layouts/master/sidebarListItem/SidebarListItem';
import { MasterSidebarProp } from '@/layouts/master/sidebar/Sidebar.types';
import './sideBar.css';



const MasterSidebar = function ({
    open,
    //handleDrawerClose
}: MasterSidebarProp) {
    const { t } = useTranslation();
    const { pathname } = useLocation();

    const match = (path: string) =>
        path ? !!matchPath({ path, end: true }, pathname) : false;


    const items = [
        {
            text: t('dashboard.title'),
            icon: <i className="bi bi-house-door"></i>,
            path: '/dashboard',
            uuid: '1'
        },
        {
            text: t('elearning.title'),
            icon: <i className="bi bi-card-list"></i>,
            children: [
                {
                    text: t('elearning.oneOffTraining.title'),
                    path: '/elearning/one-of-training',
                    uuid: '2'
                },
                {
                    text: t('elearning.regularTraining.title'),
                    path: '/elearning/regular-training',
                    uuid: '3'
                }
            ],
        },
        {
            text: t('assessment.title'),
            icon: <i className="bi bi-menu-down"></i>,
            children: [
                {
                    text: t('assessment.registration.title'),
                    subChildren: [
                        {
                            text: t('assessment.registration.registerExam.title'),
                            path: 'assessment/registration/register-exam',
                            uuid: '4'
                        },
                        {
                            text: t('assessment.registration.registrationRecord.title'),
                            path: 'assessment/registration/registration-record',
                            uuid: '5'
                        }
                    ]
                },
                {
                    text: t('assessment.upcomingAssessment.title'),
                    path: '/assessment/upcoming-assessment',
                    uuid: '6'
                },
                {
                    text: t('assessment.examRecord.title'),
                    path: '/assessment/exam-record',
                    uuid: '7'
                },
            ]
        },
        {
            text: t('certificate.title'),
            icon: <i className="bi bi-file-earmark"></i>,
            path: '/certificate',
            uuid: '8'
        },
    ] as TMenuItem[];


    return (
        <>
            <aside className="sidebar" id="sidebar">
                {
                    items.map((item) => (

                        <MasterSidebarListItem
                            key={item.text}
                            open={open}
                            item={item}
                            active={match}
                        ></MasterSidebarListItem>
                    ))
                }
            </aside>
        </>
    );
};


export default MasterSidebar;

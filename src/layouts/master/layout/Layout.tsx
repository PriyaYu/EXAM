import { useState, ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/layouts/master/navbar/header/Header';
import Sidebar from '@/layouts/master/sidebar/Sidebar';
import Main from '@/layouts/master/main/Main';


const MasterLayout = ({ children }: { children: ReactNode }) => {   
    const [open, setOpen] = useState<boolean>(true);

    // disable sidebar on exam page
    const location = useLocation();
    const isExamPage = location.pathname.startsWith('/assessment/upcoming-assessment/exam');

    // Add useEffect to change the background color based on the route
    useEffect(() => {
        const body = document.body;
        const mainElement = document.querySelector('main');

        if (location.pathname.includes('/finish') || location.pathname.includes('/view-result')) {
            body.style.background = 'linear-gradient(0deg, rgba(255, 255, 255, 0.93) 0%, rgba(255, 255, 255, 0.93) 100%), #198738';
            if (mainElement) {
                mainElement.style.background = 'linear-gradient(0deg, rgba(255, 255, 255, 0.93) 0%, rgba(255, 255, 255, 0.93) 100%), #198738'; // 設置 main 部分的背景顏色
            }
        } else {
            body.style.backgroundColor = ''; 
            if (mainElement) {
                mainElement.style.backgroundColor = '';
            }
        }
        
        return () => {
            body.style.backgroundColor = ''; 
            if (mainElement) {
                mainElement.style.backgroundColor = '';
            }
        };
    }, [location.pathname]);

    return (
        <div className={`app-container ${isExamPage ? 'hide-sidebar-header' : ''}`}>
            {!isExamPage && <Header handleSidebar={() => setOpen(!open)} />}
            {!isExamPage && <Sidebar open={open} />}
            <Main>{children}</Main>
        </div>
    );
};

export default MasterLayout;
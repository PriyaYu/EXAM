import { Outlet } from 'react-router-dom';
import MasterLayout from '@/layouts/master/layout/Layout';


export default function MasterPage() {

    return (
        <MasterLayout>
            <Outlet></Outlet>
        </MasterLayout>
    );
}
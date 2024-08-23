import { lazy } from "react";
import { Loadable } from "@/components/Loadable";


const DashboardPage = Loadable(
    lazy(() => import("@/pages/dashboard/DashboardPage"))
);

const DashboardRoutes = {
    path: "dashboard",
    element: (
        <DashboardPage />
    ),
    index: true,
}

export default DashboardRoutes;
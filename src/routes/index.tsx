import { lazy } from "react";
import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import { Loadable } from "@/components/Loadable";

// routes
import DashboardRoutes from "./DashboardRoutes";
import AssessmentRoutes from "./AssessmentRoutes";

const MasterPage = Loadable(lazy(() => import("@/pages/master/MasterPage")));
const DashboardPage = Loadable(lazy(() => import("@/pages/dashboard/DashboardPage")));

const routes: RouteObject[] = [
    {
        path: "/",
        element: <MasterPage />,
        children: [
            { path: "/", element: <DashboardPage />, index: true },
            DashboardRoutes,
            AssessmentRoutes,
            { path: "*", element: <Navigate to="/" /> },
        ]
    },
];

export default createBrowserRouter(routes);
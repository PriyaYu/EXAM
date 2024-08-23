// import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';

// import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';
import React from 'react';
import router from '@/routes';
import { RouterProvider } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import Loader from '@/components/Loader';
import ErrorBoundaryFallback from '@/components/ErrorBoundaryFallback/ErrorBoundaryFallback';



function App() {

    return (
        <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
            <React.Suspense fallback={<Loader />}>
                <RouterProvider router={router} />
            </React.Suspense>
        </ErrorBoundary>
    );
}

export default App;
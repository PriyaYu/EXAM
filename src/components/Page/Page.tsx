import { forwardRef } from "react";
import { ErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";
import ErrorBoundaryFallback from '@/components/ErrorBoundaryFallback';


const Page = forwardRef<HTMLDivElement, { children: React.ReactNode, maxWidth?: string }>(({ children, maxWidth }, ref) => (
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
        <div ref={ref}>          
            {children}      
        </div>
    </ErrorBoundary>
));

Page.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Page;

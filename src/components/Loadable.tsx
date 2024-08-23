import { Suspense, ElementType } from 'react';
import Loader from './Loader';



export const Loadable = (Component: ElementType) => (props: any) =>
(
    <Suspense fallback={<Loader />}>
        <Component {...props} />
    </Suspense>
);

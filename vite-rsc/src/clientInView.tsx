'use client';

import type { ReactElement } from 'react';
import { useInView } from 'react-intersection-observer';

const ClientInView = (): ReactElement => {
    const { ref, inView } = useInView();

    return (
        <div ref={ref}>
            Nested Component is in view: {inView ? '1' : '0'}
        </div>
    );
};

export default ClientInView;

'use client';

import React, {ReactNode} from 'react';

const AuthLayout = ({children}: {children: ReactNode}) => {
    return (
        <div className="relative w-full">
            {children}
        </div>
    );
};

export default AuthLayout;
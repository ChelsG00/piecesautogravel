import React from 'react';
import Connection from '@/components/pages/login/Login';

const ConnectionPage = ({ onPinSubmit, t }) => {
    return (
        <div>
            <Connection onPinSubmit={onPinSubmit} t={t} />
        </div>
    );
};

export default ConnectionPage;




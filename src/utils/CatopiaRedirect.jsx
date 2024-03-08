import React from 'react';
import { Navigate } from 'react-router-dom';
const CatopiaRedirect = () => {
    return <Navigate to="/auth/me" />;
}
 
export default CatopiaRedirect;
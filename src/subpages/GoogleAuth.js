import { useEffect, useNavigate } from "react";
const GoogleAuth = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlParams.entries());

        if (params.authToken) {
            localStorage.setItem('authToken', params.authToken);
        }
    })

    navigate('/home');

    return null;
}
 
export default GoogleAuth;
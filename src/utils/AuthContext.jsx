import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const storedToken = Cookies.get('token') || null;
    const navigate = useNavigate();
    const [userToken, setUserToken] = useState(storedToken);
    const [refresh, shouldRefresh] = useState(false);
    // Check if the user role is stored in cookies when the component mounts
    useEffect(() => {
        try {
            const token = Cookies.get('token');
            if (token) {
                setUserToken(token);
            } else {
                navigate('/login');
            }
        } catch (error) {
            console.error('Error retrieving user data from cookies:', error);
        }

    }, [refresh]);

    const login = (token) => {

        setUserToken(token)
        Cookies.set('token', token, { expires: 1, path: '/' });
    };

    const logout = () => {
        setUserToken(null);
        console.log('Loggin out');
        Cookies.remove('token', { path: '/' });
        shouldRefresh((prev)=> !prev);
    };

    return (
        <AuthContext.Provider value={{ login, logout, userToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

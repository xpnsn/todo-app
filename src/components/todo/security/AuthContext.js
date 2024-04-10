import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

function AuthProvider({children}) {

    const [authenticated, setAuthenticated] = useState(false);

    function login(username, password) {
        if(username === 'bohemian' && password === '2404') {
            setAuthenticated(true);
            return true;
        } else {
            setAuthenticated(false);
            return false;
        }
    }

    function logout() {
        setAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{authenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
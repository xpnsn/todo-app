import { useAuth } from "../security/AuthContext";

function LoggedOut () {
    
    const authContext = useAuth().logout();

    return (
        <>
            <h1>You are logged out!</h1>
        </>
    );
}

export default LoggedOut;
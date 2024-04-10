import { useState} from 'react';
import './Login.css'
import { useNavigate, useParams, Link} from 'react-router-dom'
import { useAuth } from '../security/AuthContext';

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const authContext = useAuth();

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleLogin() {
        if(authContext.login(username, password)) {
            navigate(`/welcome/${username}`);
        } else {
            setError(true);
        }
    }

    return(
        <>
            <div className="login">
                {error && <div className="error message">Invalid credentials</div>}
                <div className="login-form">
                    <div>
                        <label>Username</label>
                        <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                    </div>
                    <div>
                        <button type="button" name="login" onClick={handleLogin}>Login</button>
                    </div>
                </div>

            </div>
        </>
    );
}

function Welcome() {
    const {username} = useParams();
    return(
        <>
            <h1>Welcome {username}!</h1>
            <div>Manage your todos <Link to='/todos'>here</Link></div>
        </>
    );
}

export {Login, Welcome};
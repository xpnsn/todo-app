import {Link, useParams} from 'react-router-dom';
import { useAuth } from '../security/AuthContext';

function Header() {

    const isAuthenticated = useAuth().authenticated;

    const {username} = useParams();
    return (
        <>
            <header className="border-bottom border-light border-5 mb-5 p-2">
                <div className="container">
                    <div className="row">
                        <nav className="navbar navbar-expand-lg">
                            <div className="navbar-brand ms-2 fs-2 fw-bold text-black">bohemian.</div>
                            <div className="collapse navbar-collapse">
                                <ul className="navbar-nav">
                                    <li className="nav-item fs-5">
                                        {isAuthenticated && <Link className="nav-link" to="/welcome/bohemian">Home</Link>}
                                    </li>
                                    <li className="nav-item fs-5">
                                        {isAuthenticated && <Link className="nav-link" to="/todos">Todos</Link>}
                                    </li>
                                </ul>
                            </div>
                            <ul className="navbar-nav">
                                <li className="nav-item fs-5">
                                    {!isAuthenticated && <Link className="nav-link" to="/login">Login</Link>}
                                </li>
                                <li className="nav-item fs-5">
                                    {isAuthenticated && <Link className="nav-link" to="/logout">Logout</Link>}
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
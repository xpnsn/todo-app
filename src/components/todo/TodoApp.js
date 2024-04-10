import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {Login, Welcome} from './login/Login';
import PageNotFoundError from './error/PageNotFoundError';
import ListTodo from './listTodo/ListTodo'
import Header from './header/Header'
import Footer from './footer/Footer'
import LoggedOut from './login/Logout'
import AuthProvider, { useAuth } from './security/AuthContext';

function AuthenticatedRoute({ children }) {
    const isAuthenticated = useAuth().authenticated;
    if(isAuthenticated) {
        return children;
    }
    return <Navigate to="/" />
}

function TodoApp() {
    return(
        <>
            <AuthProvider>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Login />} />
                        <Route path='/login' element={<Login />} />

                        <Route path='/welcome/:username' element={                           
                            <AuthenticatedRoute>
                                <Welcome />
                            </AuthenticatedRoute>
                        } />
                        <Route path='/todos' element={
                            <AuthenticatedRoute>
                                <ListTodo />
                            </AuthenticatedRoute>
                        } />
                        <Route path='/logout' element={
                            <AuthenticatedRoute>
                                <LoggedOut />
                            </AuthenticatedRoute>
                        } />
                        
                        <Route path='*' element={<PageNotFoundError />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </AuthProvider>
        </>
    );
}

export default TodoApp;
// import { AuthContext } from '../context/contextsCreation';
import { useState } from 'react';
import LogInFunction from './LogInFunction';
import { useNavigate } from 'react-router-dom';
// import authErrorToMessage from './authErrorToMessage';

export default function LogInPage() {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
             await LogInFunction(email, password);
           
            navigate('/favorites-page');
        } catch (err) {
           if (err.code === "auth/email-not-verified") {
             setError("Email not verified, please check your inbox.");
           } else {
             setError(err.code || "Unexpected error");
           }
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' value={email} 
            onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type='submit' 
            disabled={loading}
            >{loading ? '...' : 'Log In'}</button>
            {error && <p>{error}</p>}
        </form>
        
        </>
    )
}
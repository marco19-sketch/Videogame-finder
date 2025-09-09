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
            if (!user.emailVerified) {
                setError('Email not verified, please check your inbox');
                console.log('error from login page', error)
                return;
            }
            navigate('/favorites-page');
        } catch (err) {
            setError(err?.code)
            // setError(authErrorToMessage(err?.code))
            //  const code = err?.code;
            //  if (code === 'auth/wrong-password') setError('Wrong password');
            //  else if (code === 'auth/user-not-found') setError('User not found');
            //  else if (code === 'auth/invalid-email') setError('Invalid email');
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
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default async function LogInFunction(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('User logged in:', user.uid, user.email);
        return user;
    } catch (err) {
        console.error('Log in error:', err.code, err.message);
        throw err;
    }
}
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

export default async function LogOutUser() {
    try {
        await signOut(auth);
        console.log('User logged out');
    } catch (err) {
        console.error('Log out error:', err);
        throw err;
    }
}
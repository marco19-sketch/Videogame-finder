import { setPersistence, browserLocalPersistence, browserSessionPersistence} from 'firebase/auth';

export default async function LogInPersistence(email, password, remember = true ) {
    try {
        await setPersistence(auth, remember ? browserLocalPersistence: browserSessionPersistence);
        const userCredential = await sigInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    }   catch (err) {
        console.error(err);
        throw err;
    }
}
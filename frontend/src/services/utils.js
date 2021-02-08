import { fire } from '../firebase';

export const createToken = async () => {
    const user = fire.auth().currentUser;
    const token = user && (await user.getIdToken());
    return {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    };
}

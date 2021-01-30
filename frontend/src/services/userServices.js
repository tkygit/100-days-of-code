import axios from 'axios';
import { fire } from '../firebase';

const createToken = async () => {
    const user = fire.auth().currentUser;
    const token = user && (await user.getIdToken());
    return {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    };
}

const url = 'http://localhost:7777/api/users'

export const getUser = async (userId) => {
    const header = await createToken();
    const config = {
        headers: header
    }

    try {
        const res = await axios.get(url + `/${userId}`, config);
        return res.data;
    } catch (e) {
        console.error(e);
    }
}

export const addUser = async (userId, email, username) => {
    const header = await createToken();

    const payload = {
        userId, email, username
    }

    try {
        const res = await axios.post(url, payload, { headers: header } );
        return res.data;
    } catch (e) {
        console.error(e);
    }
}

export const editUser = async (userId, payload) => {
    const header = await createToken();

    try {
        const res = await axios.put(url + `/${userId}`, payload, { headers: header } );
        return res.data;
    } catch (e) {
        console.error(e);
    }
}
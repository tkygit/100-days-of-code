import axios from 'axios';
import { createToken } from './utils';

const url = 'http://localhost:7777/api/tokens'

export const getToken = async (userId) => {
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

export const addToken = async (userId, accessToken) => {
    const header = await createToken();

    const payload = {
        userId, accessToken
    }

    try {
        const res = await axios.post(url, payload, { headers: header } );
        return res.data;
    } catch (e) {
        console.error(e);
    }
}

export const editToken = async (userId, payload) => {
    const header = await createToken();

    try {
        const res = await axios.put(url + `/${userId}`, payload, { headers: header } );
        return res.data;
    } catch (e) {
        console.error(e);
    }
}
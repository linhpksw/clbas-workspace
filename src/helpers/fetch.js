'use client';
import { getCookie, setCookie, deleteCookie } from '@/helpers';
import { toast } from 'sonner';
import jwt from 'jsonwebtoken';
import { dictionary } from '@/utils';
import { jwtDecode } from 'jwt-decode';
import UAParser from 'ua-parser-js';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const ACCESS_TOKEN_EXPIRY = process.env.NEXT_PUBLIC_ACCESS_TOKEN_EXPIRY;
const REFRESH_TOKEN_EXPIRY = process.env.NEXT_PUBLIC_REFRESH_TOKEN_EXPIRY;
const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY;

const ACCESS_TOKEN_TYPE = 'accessToken';
const REFRESH_TOKEN_TYPE = 'refreshToken';

export async function robustFetch(url, method, message = null, data = null) {
    let fetchOptions, response;

    try {
        if (message) {
            toast.loading('Đang xử lý...', { position: 'bottom-right' });
        }

        if (!isValidToken(ACCESS_TOKEN_TYPE)) {
            console.log('isValidToken:', isValidToken(ACCESS_TOKEN_TYPE));

            if (!isValidToken(REFRESH_TOKEN_TYPE)) {
                return;
            }

            const newToken = await refreshToken();

            if (!newToken) {
                return;
            }

            fetchOptions = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                method: method,
                body: data ? JSON.stringify(data) : null,
            };

            response = await fetch(url, fetchOptions);

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message);
            }

            toast.dismiss();

            if (message) {
                toast.success(message, { position: 'bottom-right', duration: 2000 });
            }

            return await response.json();
        }

        const token = getCookie(ACCESS_TOKEN_TYPE);

        fetchOptions = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            method: method,
            body: data ? JSON.stringify(data) : null,
        };

        response = await fetch(url, fetchOptions);

        if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.message);
        }

        toast.dismiss();

        if (message) {
            toast.success(message, { position: 'bottom-right', duration: 2000 });
        }

        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error.message);
        toast.dismiss();
        toast.error(`${dictionary(error.message)}`, { position: 'bottom-right', duration: 2000 });
        throw error; // Rethrowing the caught error
    }
}

export async function robustFetchWithRT(url, method, message = null) {
    let response;

    try {
        if (message) {
            toast.loading('Đang xử lý...', { position: 'bottom-right' });
        }

        if (!isValidToken(REFRESH_TOKEN_TYPE)) {
            return;
        }

        const fetchOptions = {
            headers: { 'Content-Type': 'application/json' },
            method: method,
            body: JSON.stringify({ token: getCookie(REFRESH_TOKEN_TYPE) }),
        };

        response = await fetch(url, fetchOptions);

        if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.message);
        }

        toast.dismiss();

        if (message) {
            toast.success(message, { position: 'bottom-right', duration: 2000 });
        }

        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error.message);
        toast.dismiss();
        toast.error(`${dictionary(error.message)}`, { position: 'bottom-right', duration: 2000 });
        throw error; // Rethrowing the caught error
    }
}

export async function robustFetchWithoutAT(url, method, message = null, data = null) {
    let response;

    try {
        if (message) {
            toast.loading('Đang xử lý...', { position: 'bottom-right' });
        }

        const fetchOptions = {
            headers: { 'Content-Type': 'application/json' },
            method: method,
            body: data ? JSON.stringify(data) : null,
        };

        response = await fetch(url, fetchOptions);

        if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.message);
        }

        toast.dismiss();

        if (message) {
            toast.success(message, { position: 'bottom-right', duration: 2000 });
        }

        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error.message);
        toast.dismiss();
        toast.error(`${dictionary(error.message)}`, { position: 'bottom-right', duration: 2000 });
        throw error; // Rethrowing the caught error
    }
}

async function refreshToken() {
    const oldRefreshToken = getCookie(REFRESH_TOKEN_TYPE);

    try {
        const response = await fetch(`${BASE_URL}/auth/refresh`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: oldRefreshToken }),
        });

        if (!response.ok) {
            deleteCookie(REFRESH_TOKEN_TYPE);
            return;
        }

        const jsonResponse = await response.json();

        const { accessToken, refreshToken } = jsonResponse.data;

        setCookie(ACCESS_TOKEN_TYPE, accessToken, ACCESS_TOKEN_EXPIRY);
        setCookie(REFRESH_TOKEN_TYPE, refreshToken, REFRESH_TOKEN_EXPIRY);

        return jsonResponse.data;
    } catch (error) {
        console.error('Refresh token error:', error.message);
        throw error;
    }
}

export function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, SECRET_KEY);

        return { valid: true, expired: false, decoded };
    } catch (error) {
        console.error('JWT Verification Error:', error);

        if (error.name === 'TokenExpiredError') {
            return { valid: false, expired: true, decoded: null };
        } else {
            return { valid: false, expired: false, decoded: null };
        }
    }
}

export function isValidToken(tokenName) {
    const token = getCookie(tokenName);

    if (!token) {
        return false; // No token found, assume it's invalid
    }

    const { valid, expired } = verifyToken(token);

    return valid && !expired;
}

'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { robustFetchWithoutAT, setCookie } from '@/helpers';
import { jwtDecode } from 'jwt-decode';

const useLogin = () => {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();

    // Capture redirectTo from query parameters
    const redirectTo = searchParams.get('redirectTo') || '/';

    const loginFormSchema = yup.object({
        credential: yup.string().required('Vui lòng nhập tài khoản'),
        password: yup.string().required('Vui lòng nhập mật khẩu'),
    });

    const { control, handleSubmit, reset } = useForm({
        resolver: yupResolver(loginFormSchema),
    });

    const changeUserRole = (role) => {
        switch (role) {
            case 'Email trợ giảng':
                reset({
                    credential: '',
                    password: 'Abcd1234@',
                });
                break;
        }
    };

    const loginUsingGoogle = async () => {
        const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
        const GOOGLE_REDIRECT_URI = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;
        const GOOGLE_AUTH_URI = process.env.NEXT_PUBLIC_GOOGLE_AUTH_URI;

        const targetUrl = `${GOOGLE_AUTH_URI}?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=openid%20email%20profile`;

        router.push(targetUrl);
    };

    const login = handleSubmit(async (values) => {
        setLoading(true);

        try {
            const authResponse = await robustFetchWithoutAT(
                `${BASE_URL}/auth/login`,
                'POST',
                'Đăng nhập thành công...',
                values
            );

            const { accessToken, refreshToken } = authResponse.data;
            setCookie('accessToken', accessToken, 3600);
            setCookie('refreshToken', refreshToken, 604800);

            const scopes = getScopes(accessToken);
            const decoded = getDecodedToken(accessToken);
            const isAdmin = scopes.includes('ROLE_ADMIN');
            const username = decoded.sub;

            if (isAdmin) {
                router.push(`/${username}/dashboard`);
            } else {
                router.push(decodeURIComponent(redirectTo));
            }
        } catch (error) {
            console.error('Login error:', error.message);

            if (error.message.includes('email')) {
                const email = error.message.match(/[\w.-]+@[\w.-]+\.\w+/)[0];
                router.push(`/auth/verification?type=verify&email=${encodeURIComponent(email)}`);

                await robustFetchWithoutAT(`${BASE_URL}/auth/resend-verification`, 'POST', null, {
                    email: email,
                    type: 'verify',
                });
            }
        } finally {
            setLoading(false);
        }
    });

    return { loading, login, control, changeUserRole, loginUsingGoogle };
};

const getDecodedToken = (token) => {
    try {
        return jwtDecode(token);
    } catch (error) {
        console.error('Failed to decode token:', error);
        return null;
    }
};

const getScopes = (token) => {
    const decoded = getDecodedToken(token);
    return decoded ? decoded.scope.split(' ') : [];
};

export default useLogin;

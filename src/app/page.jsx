'use client';
import { Authorization } from '@/components/security';
import { Navbar } from '@/components';

export default function Home() {
    return (
        <Authorization notAllowedRoles={['ROLE_ADMIN', 'ROLE_EMPLOYEE']}>
            <Navbar />
        </Authorization>
    );
}

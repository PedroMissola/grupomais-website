'use client';

import { useRouter } from 'next/navigation';
import { ArrowBigLeft } from 'lucide-react';

export default function Voltar() {
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            className="text-sm text-neutral-900 hover:underline hover:text-neutral-600 "
        >
            <ArrowBigLeft />
        </button>
    );
}

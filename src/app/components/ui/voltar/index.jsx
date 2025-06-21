'use client';

import { useRouter } from 'next/navigation';
import { ArrowBigLeft } from 'lucide-react';

export default function Voltar() {
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            className="text-sm w-5 h-5 text-neutral-900 hover:underline hover:text-neutral-600 hover:scale-[1.2] active:scale-[0.9] transition-transform duration-200"
        >
            <ArrowBigLeft />
        </button>
    );
}

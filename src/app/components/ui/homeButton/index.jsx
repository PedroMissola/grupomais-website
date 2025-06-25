'use client'
import Link from 'next/link'
import { ArrowUp, Home } from 'lucide-react'

export default function ButtonHome() {
    return (
        <>
            <div className="fixed bottom-4 right-4 flex flex-col items-end gap-3 z-50">
                <Link
                    href="/"
                    className="flex items-center gap-2 bg-[#113548] text-white px-4 py-4 mx-4 my-2 rounded-xl shadow hover:bg-[#0a1e29] transition"
                >
                    <Home className="w-6 h-6" />
                </Link>
            </div>
        </>
    )
}
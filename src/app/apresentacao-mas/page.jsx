'use client'

import { useEffect, useState } from 'react'
import ButtonHome from '../components/ui/homeButton'

export default function HtmlPage() {
    const [conteudo, setConteudo] = useState(null)

    useEffect(() => {
        fetch('/produtos-mas.html')
            .then((res) => res.text())
            .then(setConteudo)
    }, [])

    if (!conteudo) {
        return (
            <main className="flex h-screen items-center justify-center bg-white">
                <div className="flex flex-col items-center gap-4 text-center">
                    {/* Spinner */}
                    <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-[#113548]" />

                    {/* Texto */}
                    <p className="text-lg font-medium text-neutral-950">
                        Carregando conteúdo...
                    </p>
                </div>
            </main>
        )
    }

    return (
        <main className="p-4">
            <div dangerouslySetInnerHTML={{ __html: conteudo }} />
            <ButtonHome />
        </main>
    )
}

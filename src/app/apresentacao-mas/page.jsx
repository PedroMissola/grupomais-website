'use client'

import { useEffect, useState } from 'react'
import ButtonHome from '../components/ui/homeButton'

export default function HtmlPage() {
    const [conteudo, setConteudo] = useState < string | null > (null)

    useEffect(() => {
        fetch('produtos-mas.html')
            .then((res) => res.text())
            .then(setConteudo)
    }, [])

    return (
        <main className="p-4">
            {conteudo ? (
                <div dangerouslySetInnerHTML={{ __html: conteudo }} />
            ) : (
                <p>Carregando conteúdo...</p>
            )}
            <ButtonHome />
        </main>
    )
}

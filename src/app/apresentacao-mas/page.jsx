// app/html-page/page.tsx
import fs from 'fs'
import path from 'path'
import ButtonHome from '../components/ui/homeButton'

export default async function HtmlPage() {
    const filePath = path.join(process.cwd(), 'public', 'produtos-mas.html')
    const conteudo = fs.readFileSync(filePath, 'utf8')

    return (
        <main className="relative p-4">
            <div dangerouslySetInnerHTML={{ __html: conteudo }} />
            <ButtonHome />
        </main>
    )
}

import Voltar from "../ui/voltar";

export default function Header({
    name = "MAS Produtos",
    description = "Sua loja de produtos de qualidade",
    className = "",
    ...props
}) {
    return (
        <header
            className={`w-full bg-white flex flex-col items-center justify-center gap-2 py-12 px-4 text-center ${className}`}
            {...props}
        >
            <div className="flex items-center justify-center gap-4 mb-8">
                <Voltar />
                <h1 className="text-3xl md:text-4xl font-bold text-neutral-900">{name}</h1>
            </div>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl">
                {description}
            </p>
        </header>
    );
}

// import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
    image = "https://via.placeholder.com/384x256",
    name = "Produto Exemplo",
    description = "Produto de alta qualidade",
    link = "#",
}) {
    return (
        <Link
            href={link}
            className="group w-full max-w-[384px] h-[400px] border border-neutral-300 rounded-lg overflow-hidden flex flex-col text-center bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] active:scale-100 focus-visible:ring-2 focus-visible:ring-blue-500 outline-none"
        >
            <img
                width={384}
                height={256}
                src={image}
                alt={name}
                className="h-64 w-full object-cover group-hover:opacity-90 transition-opacity duration-300"
            />

            <div className="flex-1 flex items-center justify-center px-6 py-4">
                <div className="flex flex-col justify-center items-center gap-2">
                    <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors">
                        {name}
                    </h3>
                    <p className="text-neutral-700 text-sm">{description}</p>
                </div>
            </div>
        </Link>
    );
}

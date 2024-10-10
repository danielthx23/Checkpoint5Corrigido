import Noticia from "@/types/Noticia/Noticia";
import Link from "next/link";

interface CardNoticiaProps {
    Noticia: Noticia;
}

const CardNoticia = ({ Noticia }: CardNoticiaProps) => {
    return (
        <Link href={`/${Noticia.id}`} className="border border-gray-300 rounded overflow-hidden bg-white transition-transform transform hover:scale-105 block">
            <img src={Noticia.imagem} alt={Noticia.titulo} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h1 className="text-xl font-bold mb-2">{Noticia.titulo}</h1>
                <h2 className="line-clamp-2 text-gray-700 mb-4">{Noticia.conteudo}</h2>
                <div className="flex flex-wrap space-x-2 mb-2 justify-between">
                    {Noticia.Categorias.map((categoria) => (
                        <span key={categoria} className="bg-gray-200 text-neutral-600 text-xs font-semibold py-1 px-2">
                            {categoria}
                        </span>
                    ))}
                    <h2 className="text-gray-500 text-sm">{Noticia.data.toLocaleString()}</h2>
                </div>
            </div>
        </Link>
    );
};

export default CardNoticia;

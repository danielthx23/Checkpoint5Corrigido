import Noticia from "@/types/Noticia/Noticia";
import Link from "next/link";
import Comentarios from "../comentario/Comentario";

interface NoticiaDetalhesProps {
    noticia: Noticia;
}

const NoticiaDetalhes = ({ noticia }: NoticiaDetalhesProps) => {
    return (
        <main className="p-6 bg-gray-50 rounded-lg shadow-lg flex gap-4 flex-col">
            <h1 className="text-3xl font-bold mt-4">{noticia.titulo}</h1>
            <div className="relative w-full h-60 overflow-hidden rounded-lg shadow-md">
                <img
                    src={noticia.imagem}
                    alt={noticia.titulo}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
            <p className="mt-4 text-lg text-gray-800">{noticia.conteudo}</p>
            <p className="text-gray-500 mt-2">{noticia.data.toLocaleDateString()}</p>
            <div className="flex flex-wrap space-x-2 mt-4">
                {noticia.Categorias.map((categoria) => (
                    <span key={categoria} className="bg-gray-200 text-neutral-600 text-xs font-semibold py-1 px-2 rounded">
                        {categoria}
                    </span>
                ))}
            </div>
            <h2 className="mt-8 text-2xl font-semibold">Comentários</h2>
            <div className="mt-4">
                {noticia.Comentarios.length > 0 ? (
                    noticia.Comentarios.map((comentario) => (
                        <Comentarios key={comentario.nome} comentario={comentario} />
                    ))
                ) : (
                    <p className="text-gray-600">Nenhum comentário disponível.</p>
                )}
            </div>
            <div className="flex justify-center w-full gap-2">
                <Link href="/" className="flex justify-center text-white w-fit p-4 py-2 rounded-lg bg-blue-500 hover:underline mb-4">
                    Voltar para a home
                </Link>
            </div>
        </main>
    );
};

export default NoticiaDetalhes;

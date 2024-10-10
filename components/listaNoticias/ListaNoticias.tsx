'use client'

import Data from "@/service/Service";
import Noticia from "@/types/Noticia/Noticia";
import { useEffect, useState } from "react";
import CardNoticia from "../cardNoticia/CardNoticia";

interface ListaNoticiasProps {
    perPage?: number;
}

const ListaNoticias = ({ perPage = 10 }: ListaNoticiasProps) => {
    const [data, setData] = useState<Noticia[]>(Data);
    const [displayedData, setDisplayedData] = useState<Noticia[]>([]);
    const [page, setPage] = useState<number>(0);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);
    const [filter, setFilter] = useState<string>("");

    useEffect(() => {
        filterData();
    }, [filter, page]);

    const filterData = () => {
        const filtered = data.filter(noticia =>
            noticia.titulo.toLowerCase().includes(filter.toLowerCase()) ||
            noticia.conteudo.toLowerCase().includes(filter.toLowerCase()) ||
            noticia.Categorias.some(categoria => categoria.toLowerCase().includes(filter.toLowerCase()))
        );
        setDisplayedData(filtered.slice(0, (page + 1) * perPage));
        setHasMore(filtered.length > (page + 1) * perPage);
    };

    const getData = () => {
        if (!hasMore || loading) {
            return;
        }
        setLoading(true);

        const startIndex = (page + 1) * perPage;
        const newItems = data.slice(startIndex, startIndex + perPage);

        if (newItems.length > 0) {
            setDisplayedData((prevData) => [...prevData, ...newItems]);
            setPage(page + 1);
        } else {
            setHasMore(false);
        }

        setLoading(false);
    };

    return (
        <main className="flex flex-col gap-4">
            <h1 className="text-xl font-bold">Bem vindo!</h1>
            <input
                type="text"
                placeholder="Buscar artigos..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="mb-4 p-2 border rounded w-full"
            />
            <section className="grid grid-cols-3 gap-8">
                {displayedData.length > 0 ? (
                    displayedData.map((noticia) => (
                        <CardNoticia key={noticia.id} Noticia={noticia} />
                    ))
                ) : (
                    <p className='text-gray-600'>Nenhum artigo encontrado</p>
                )}
            </section>
            <footer className='container mx-auto p-4 mt-8 text-center col-span-full'>
                {
                    hasMore && (
                        <button onClick={getData} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                            {loading ? 'Carregar...' : 'Carregar mais'}
                        </button>
                    )
                }
                {
                    !hasMore && displayedData.length > 0 && <p className='text-gray-600'>Não há mais itens</p>
                }
            </footer>
        </main>
    );
}

export default ListaNoticias;

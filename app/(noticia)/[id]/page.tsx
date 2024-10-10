"use client"

import NoticiaDetalhes from "@/components/noticiaDetalhes/NoticiaDetalhes";
import Data from "@/service/Service";
import Noticia from "@/types/Noticia/Noticia";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

interface NoticiaPageProps {
    params: {
        id: string
    }
}

const NoticiaPage = ({ params }: NoticiaPageProps) => {
    const { id } = params;
    const router = useRouter();
    const [noticia, setNoticia] = useState<Noticia | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (id) {
            const foundNoticia = Data.find(n => n.id === Number(id));
            if (foundNoticia) {
                setNoticia(foundNoticia);
            } else {
                router.push('/404');
            }
            setLoading(false);
        }
    }, [id, router]);

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (!noticia) {
        return null;
    }

    return (
        <>
            <NoticiaDetalhes noticia={noticia} />
        </>
    );
};

export default NoticiaPage;

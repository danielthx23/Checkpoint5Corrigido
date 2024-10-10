'use client'

import Comentario from '@/types/Comentario/Comentario';

interface ComentariosProps {
    comentario: Comentario
}
const Comentarios = ({ comentario }: ComentariosProps) => {
    return (
        <div className='border text-black border-neutral-200 rounded-md flex flex-col p-4'>
            <h1 className='font-bold'>{comentario.nome}</h1>
            <h1>{comentario.texto}</h1>
        </div>
    );
}

export default Comentarios;

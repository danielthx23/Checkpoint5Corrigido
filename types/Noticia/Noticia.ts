import Comentario from "../Comentario/Comentario"

export default interface Noticia {
    id: number
    titulo: string
    data: Date
    conteudo: string
    imagem: string
    Categorias: Array<string>
    Comentarios: Array<Comentario>
}
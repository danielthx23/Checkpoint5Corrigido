import Link from "next/link"

const notfound = () => {
    return (
        <main className="w-screen h-screen bg-white flex gap-10 flex-col justify-center items-center">
            <img src="https://http.cat/404" alt="imagem gato 404" />
            <h1 className="text-xl text-black font-bold">404 - Pagina não encontrada!</h1>
            <Link className="bg-blue p-4 py-2 text-white" href="/">Voltar para home</Link>
        </main>
    ) 
}

export default notfound


export default function Rodape() {
    return (
        <footer className="flex justify-end bg-zinc-700 p-6">
            <span className="text-zinc-400 text-sm px-6">
                Todos os direitos reservados &copy; { new Date().getFullYear() }
            </span>
        </footer>
    )
}
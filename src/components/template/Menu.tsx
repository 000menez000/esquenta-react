import Link from "next/link";


export default function Menu() {
    return (
        <aside className="w-80 p-6 bg-zinc-800">
            <nav className="flex flex-col *:gap-2">
                <Link href='/'>Início</Link>
                <Link href='/primeiro'>Primeiro Componente</Link>
                <Link href='/contador'>Componente com Estado</Link>
            </nav>
        </aside>
    )
};
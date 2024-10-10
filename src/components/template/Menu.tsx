import { Icon123, IconForms, IconHome2, IconNumber1 } from "@tabler/icons-react";
import MenuItem from "./MenuItem";


export default function Menu() {
    return (
        <aside className="w-80 p-6 bg-zinc-800">
            <nav className="flex flex-col *:gap-2">
                <MenuItem texto="Início" href="/" icone={ <IconHome2 /> } />
                <MenuItem texto="Primeiro Componente" href="/primeiro" icone={ <IconNumber1 /> } />
                <MenuItem texto="Componente com Estado" href="/contador" icone={ <Icon123 /> } />
                <MenuItem texto="Exemplo de Formulário" href="/formulario" icone={ <IconForms /> } />
            </nav>
        </aside>
    )
};
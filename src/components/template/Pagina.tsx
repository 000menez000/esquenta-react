import { ReactNode } from "react"
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import Menu from "./Menu";

export interface PaginaProps {
    className?:string;
    children:ReactNode;
}

export default function Pagina(props:PaginaProps) {
    return (
        <div className={`flex flex-col h-screen`}>
            <Cabecalho />
            <div className="flex flex-1">
                <Menu />
                <main className={`p-8 ${ props.className ?? '' }`}>{ props.children }</main>
            </div>
            <Rodape />
        </div>
    )
};
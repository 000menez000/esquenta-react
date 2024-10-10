import Link from "next/link";

export interface MenuItemProps {
    icone?:any;
    texto:string;
    href:string;
};

export default function MenuItem(props:MenuItemProps) {
    return (
        <div className="flex items-center py-2 px-2 rounded-lg hover:bg-zinc-900">
            { props.icone }
            <Link href={props.href}>{ props.texto }</Link>
        </div>
    ) 
}
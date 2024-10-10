import { IconBrandReact } from "@tabler/icons-react";


export default function Cabecalho() {
    return (
        <header 
            className="
                flex justify-between items-center
                bg-zinc-700 px-6 py-2"
        >
            <div className="flex items-center gap-2">
                <IconBrandReact size={40} stroke={1} className="text-blue-400" />
                <span className="font-black">React Essencial</span>
            </div>
            <div className="bg-orange-500 rounded-full py-2.5 px-2.5 font-bold text-sm">
                US
            </div>
        </header>   
    );
};  

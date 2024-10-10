'use client';

import useFormularioUsuario from "@/hooks/useFormularioUsuario";
import { Console } from "console";

export default function Formulario() {
    const { 
        nome, 
        setNome, 
        email, 
        setEmail, 
        senha, 
        setSenha, 
        salvar,
        cancelar,
    } = useFormularioUsuario(); 

    return (
        <div className="flex flex-col gap-3">
            <input 
                type="text" 
                placeholder="Informe o nome" 
                size={ 80 }
                value={ nome }
                onChange={(e) => setNome(e.target.value)} 
                className="bg-zinc-800 p-2 rounded-md outline-none" 
            />
            <input 
                type="text" 
                placeholder="Informe o email" 
                value={ email }
                onChange={(e) => setEmail(e.target.value)}
                size={ 80 } 
                className="bg-zinc-800 p-2 rounded-md outline-none" 
            />
            <input 
                type="password" 
                placeholder="Informe a senha" 
                value={ senha }
                onChange={(e) => setSenha(e.target.value)}
                size={ 80 } 
                className="bg-zinc-800 p-2 rounded-md outline-none" 
            />
            <div className="flex justify-end gap-3">
                <button 
                    className="bg-red-500 font-bold py-2 px-10 rounded-lg hover:bg-red-600"
                    onClick={(e) => {
                        e.preventDefault();

                        cancelar();
                    }}
                >
                    Cancelar
                </button>
                <button 
                    className="bg-green-500 font-bold py-2 px-10 rounded-lg hover:bg-green-600"
                    
                    onClick={(e) => {
                        e.preventDefault();

                        salvar();
                    }}
                >
                    Salvar
                </button>
            </div>
        </div>
    );
};
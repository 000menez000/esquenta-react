
export interface BotaoProps {
    label?:string
};

export default function Botao(props:BotaoProps) {
    const label = props.label ?? "OK";

    return (
        <div>
            <button className="bg-green-500 p-2 rounded-md">{ label }</button>
        </div>
    );
};
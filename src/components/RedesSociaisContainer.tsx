import { useState } from "react";
import SelectRedesSociais, { SelectRedesSociaisProps } from "./SelectRedesSociais";

interface RedesSociaisContainerProps {
    ComponentesLinha: number,
    PropsList: SelectRedesSociaisProps[]
}

export default function RedesSociaisContainer({ ComponentesLinha, PropsList }: RedesSociaisContainerProps) {

    const [ativo, setAtivo] = useState<number>(0)

    return (
        <div className={`w-full space-x-2 grid grid-cols-${ComponentesLinha.toString()}`}>
            {PropsList.map((i, index) => {
                return (
                    <SelectRedesSociais key={index} label={i.label} alt={i.alt} imagem={i.imagem} active={ativo == index} onClick={() => setAtivo(index)} />
                )
            })}
        </div>
    )
}
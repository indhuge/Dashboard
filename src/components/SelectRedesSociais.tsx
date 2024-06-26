import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export interface SelectRedesSociaisProps {
    label: string;
    imagem: StaticImport;
    alt: string;
    active?: boolean;
    onClick?: (() => void);
}

export default function SelectRedesSociais({ label, imagem, alt, active, onClick }: SelectRedesSociaisProps) {
    return (
        <button className={`flex flex-row items-center  rounded p-2 justify-start ${active? "bg-[#F0F3FF] border-[#0060AE] border-1" : "bg-[#F2F4F6]"}`} onClick={onClick}>
            <Image className={`${!active && "grayscale"}`} src={imagem} alt={alt} />
            <label className="text-[#1A191B] text-sm font-medium ml-2">{label}</label>
        </button>
    )
}
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface ButtonRedesSociaisProps {
    label: string;
    imagem: StaticImport;
    alt: string;
    onClick?: (() => void);
}

export default function ButtonRedesSociais({ label, imagem, alt, onClick }: ButtonRedesSociaisProps) {
    return (
        <button className="flex flex-row items-center bg-[#F2F4F6] rounded p-2 justify-start" onClick={onClick}>
            <Image src={imagem} alt={alt} />
            <label className="text-[#1A191B] text-sm font-medium">{label}</label>
        </button>
    )
}
import Link from "next/link";

interface CadastroLinkProps{
    label: string,
    linkText: string,
    href?: string,
}

export default function CadastroLink({label,linkText,href}:CadastroLinkProps){
    return(
        <div className="flex  flex-row items-center">
            <label className="text-base font-medium text-[#4C4E61]">
                {label}
            </label>
            <Link className="text-base font-medium text-[#0060AE]  ml-1"  href = {href?href:''}>
                {linkText}
            </Link>
        </div>
    )
}
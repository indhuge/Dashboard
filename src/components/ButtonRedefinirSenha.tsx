interface ButtonRedefinirSenhaProps {
    label: string;
    onClick?: () => void;
}

export default function ButtonRedefinirSenha({ label, onClick }: ButtonRedefinirSenhaProps) {
    return (
        <button
            onClick={onClick}
            className={`
                text-base font-normal  text-[#4C4E61]
                active:opacity-50
            `}
        >
            {label}
        </button>
    )
}
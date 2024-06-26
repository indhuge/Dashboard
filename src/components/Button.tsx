interface ButtonProps {
    primario?: boolean;
    label: string;
    onClick?: () => void;
}

export default function Button({ primario, label, onClick }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`
                w-full px-4 py-3 rounded text-sm font-bold
                active:opacity-50
                ${primario == true || primario == undefined ?
                    "bg-darkblue text-white"
                    :
                    "bg-white text-black"
                }
            `}
        >
            {label}
        </button>
    )
}
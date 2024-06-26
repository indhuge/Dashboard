import { ChangeEvent } from "react";

interface InputProps {
    type: "text" | "email" | "password" | "tel";
    label: string;
    placeholder?: string
    onChange?: (e?: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ type, label, placeholder, onChange }: InputProps) {
    return (
        <div className="w-full flex flex-col text-left">
            <label className="text-black text-left text-sm font-normal">{label}</label>
            <input
                className="w-full px-4 py-3 text-black text-left border border-[#A4A4A4] rounded"
                type={type}
                onChange={onChange}
                placeholder={placeholder}
                pattern={type == "tel" ? "[0-9]{10,13}" : "."}
            />
        </div>
    )
}
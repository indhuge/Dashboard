import { useEffect, useState, ChangeEvent, KeyboardEvent } from "react";

interface MFAProps {
    digits: number;
    incorect?: boolean;
}

export default function InputMFA({ digits, incorect }: MFAProps) {

    const [incorreto, setIncorreto] = useState(incorect)
    let inputCode = new Array(digits)

    useEffect(() => {
        document.getElementById("mfa-input-0")?.focus()
    })

    const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
        var key = e.key;
        if (key == "Backspace" || key == "Delete") {
            inputCode.map((i) => { i = "" })
            document.querySelectorAll(".mfa-input").forEach((i) => { (i as HTMLInputElement).value = "" })
            document.getElementById(`mfa-input-0`)?.focus()
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        inputCode[index] = e.target.value
        if (e.target.value != "" && (index + 1) < digits) {
            document.getElementById(`mfa-input-${index + 1}`)?.focus();
        }
        else if ((index + 1) >= digits) {
            (document.activeElement as HTMLElement).blur();
            submitCode();
        }
    }

    async function submitCode() {
        let codeString = ""
        inputCode.map((i) => { codeString += i })
        ///TODO: Implementar verificação do Codigo
    }

    return (
        <div className="w-full flex flex-col">
            <div className="w-full flex flex-row justify-evenly my-12">
                {[...Array(digits)].map((i, index) => {
                    return (
                        <input
                            className={`
                                mfa-input
                                text-black text-center text-lg font-medium
                                rounded-lg p-4 border 
                                ${incorreto ? "border-[#FF6565]" : "border-[#D8DDE3]"}
                            `}
                            id={`mfa-input-${index}`}
                            size={1}
                            maxLength={1}
                            type="number"
                            min="0"
                            max="9"
                            key={index}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKey(e)}
                        />
                    )
                })}

            </div>
            {
                incorreto &&
                <div className="w-full text-center flex flex-col">
                    <label className="text-base text-[#FF6565] font-medium">Código incorreto ou expirado</label>
                    <label className="text-base text-[#FF6565] font-normal">Tente novamente</label>
                </div>
            }
        </div>
    )
}
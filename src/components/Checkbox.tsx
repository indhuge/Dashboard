import React, { ChangeEvent } from "react";

export interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange?: (checked: boolean) => void; /*usar use state */
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target.checked);
        }
    };

    return (
        <div className="flex items-center">
            <input
                type="checkbox"
                className="form-checkbox h-4 w-4 border border-gray-500 rounded-md"
                checked={checked}
                onChange={handleChange}
            />
            <label className="ml-2 text-sm font-normal text-[#4C4E61]">{label}</label>
        </div>
    );
};

export default Checkbox;

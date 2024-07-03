import React from "react";
import clsx from "clsx";

export interface TipografiaProps {
    variant: 'h1' | 'h2' | 'h3';
    children: React.ReactNode;
    fonteCustomizada?: string; 
}

const Tipografia: React.FC<TipografiaProps> = ({ variant, children, fonteCustomizada }) => {
    const baseStyles = "font-sans";
    const variantStyles = {
        h1: "text-4xl font-bold",
        h2: "text-3xl font-semibold",
        h3: "text-2xl font-medium",
    };

    const className = clsx(baseStyles, fonteCustomizada, variantStyles[variant]);

    return React.createElement(variant, { className }, children);
};

export default Tipografia;

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";
import Image from "next/image";

interface LogoProps {
    image: StaticImport;
    alt: string;
}

export default function Logo({ image, alt} : LogoProps) {
    return (
        <div className="w-logoWidth h-8 bg-inherit">
            <Image src={image} alt={alt} />
        </div>
    );
}

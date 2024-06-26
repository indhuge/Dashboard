import React, { ReactNode } from "react";

export interface ContainerProps {
    children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className="w-full flex justify-center items-center min-h-screen bg-white">
            {children}
        </div>
    );
};

export default Container;
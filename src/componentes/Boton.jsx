import React from "react";
// Componente reutilizable de botón
export const Button = ({ label = "Click", variant = "number", onClick }) => {
    // Definir clases base y variantes
    const baseStyles =
        "transition duration-300 active:-translate-y-1 text-xl rounded-lg p-2 hover:outline-none hover:ring-offset-2 hover:ring-2 ";
    const variantStyles = {
        number: "bg-white text-purple-900 hover:bg-blue-300 hover:ring-blue-300",
        operator: "bg-[#9e47aa] text-white hover:bg-[#9e47aa]/80 hover:text-black hover:bg-purple-300 hover:ring-pink-300",
        clear: "bg-blue-800 text-white rounded-lg p-2 transition duration-300 active:-translate-y-1 text-xl col-span-4 hover:text-black hover:bg-blue-100 hover:ring-blue-300",
    };

    return (
        <button
            type="button"
            className={`${baseStyles} ${variantStyles[variant]}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

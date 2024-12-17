import React from "react";
// Componente reutilizable de botón
export const Button = ({ label = "Click", variant = "number", onClick }) => {
    // Definir clases base y variantes
    const baseStyles =
        "transition duration-300 active:-translate-y-1 text-xl rounded-lg p-2";
    const variantStyles = {
        number: "bg-white text-purple-900",
        operator: "bg-[#9e47aa] text-white",
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

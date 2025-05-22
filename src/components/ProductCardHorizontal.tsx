import React from "react";

interface ProductCardHorizontalProps {
    image: string;
    title: string;
    available?: boolean;
    description: string;
    price: string;
}

const ProductCardHorizontal = ({ image, title, available = true, description, price }: ProductCardHorizontalProps) => (
    <div className="bg-[#d3ffe6] rounded-xl shadow-lg p-5 flex flex-row items-start gap-6 w-full min-h-[220px]">
        {/* Image à gauche */}
        <div className="flex-shrink-0 w-56 h-56 flex items-center justify-center">
            <img src={image} alt={title} className="w-full h-full object-contain rounded-lg" />
        </div>
        {/* Texte à droite */}
        <div className="flex flex-col flex-1 h-full justify-between">
            <div>
                <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-2xl font-bold text-green-800">{title}</h3>
                    {available && (
                        <span className="bg-green-700 text-white text-xs font-semibold px-2 py-1 rounded ml-2">disponible</span>
                    )}
                </div>
                <p className="text-gray-700 text-base mb-4">{description}</p>
            </div>
            <div className="mt-2 text-xl font-bold text-green-700">{price}</div>
        </div>
    </div>
);

export default ProductCardHorizontal; 
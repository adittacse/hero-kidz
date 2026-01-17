import React from "react";

const ProductSkeleton = () => {
    return (
        <div className="animate-pulse bg-white/50 flex flex-col gap-4">
            <div className="w-full h-48 bg-gray-300 rounded-md"></div>
            <div className="w-3/4 h-6 bg-gray-300 rounded"></div>
            <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
            <div className="w-1/2 h-6 bg-gray-300 rounded"></div>
            <div className="w-full h-10 bg-gray-300 rounded"></div>
        </div>
    );
};

export default ProductSkeleton;
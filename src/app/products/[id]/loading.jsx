import React from "react";

const ProductDetailsSkeleton = () => {
    return (
        <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {/* image skeleton */}
            <div className="skeleton w-full h-105 rounded-xl"></div>

            {/* content skeleton */}
            <div className="space-y-4">
                <div className="skeleton w-3/4 h-8"></div>
                <div className="skeleton w-1/2 h-4"></div>
                <div className="skeleton w-1/3 h-7"></div>
                <div className="skeleton w-48 h-12"></div>

                <div className="space-y-2 mt-6">
                    <div className="skeleton w-full h-4"></div>
                    <div className="skeleton w-full h-4"></div>
                    <div className="skeleton w-5/6 h-4"></div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsSkeleton;
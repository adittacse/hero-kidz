import ProductSkeleton from "@/components/skeleton/ProductSkeleton";

const loading = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {
                [...Array(9)].map((_, index) => (
                    <ProductSkeleton key={index} />
                ))
            }
        </div>
    );
};

export default loading;
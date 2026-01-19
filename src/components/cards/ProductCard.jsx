import { FaStar } from "react-icons/fa";
import Image from "next/image";
import CartButton from "@/components/buttons/CartButton";
import Link from "next/dist/client/link";

const ProductCard = ({ product }) => {
    const { _id, title, image, price, ratings, reviews, sold } = product;

    return (
        <div className="card bg-base-100 shadow-lg relative">
            <figure className="p-4">
                <Image width={200} height={188} src={image} alt={title} className="rounded-md w-full h-48 object-cover" />
            </figure>
            <div className="card-body p-4">
                <h2 className="card-title text-lg font-semibold">{title}</h2>
                <div className="flex items-center space-x-2 mt-2">
                    <div className="flex text-yellow-400">
                        {
                            Array.from({ length: 5 }, (_, i) =>(
                                <FaStar
                                    key={i}
                                    className={i < Math.round(ratings) ? "opacity-100" : "opacity-40"}
                                />
                            ))
                        }
                    </div>
                    <span className="text-sm text-gray-600">({reviews} reviews)</span>
                </div>

                <div className="flex justify-between items-center mt-2">
                    <span className="font-bold text-lg">৳{price}</span>
                    <span className="text-sm text-gray-500">{sold} sold</span>
                </div>

                <CartButton product={{ ...product, id: _id.toString() }} />

                <Link href={`/products/${_id}`} className="btn btn-primary btn-outline mt-4 w-full">
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
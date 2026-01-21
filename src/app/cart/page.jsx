import { getCart } from "@/actions/server/cart";
import Cart from "@/components/home/Cart";
import { fontBangla } from "@/app/layout";
import Link from "next/dist/client/link";
import { TbHorseToy } from "react-icons/tb";

const CartPage = async () => {
    const cartItems = await getCart();

    const formatedItems = cartItems.map((item) => ({
        ...item,
        _id: item._id.toString()
    }));

    return (
        <div>
            <h2 className="text-4xl py-4 font-bold border-l-8 border-primary pl-8">
                My Cart
            </h2>

            <div>
                {
                    cartItems.length === 0 ? (
                        <div className="text-center py-20 space-y-5">
                            <h2 className={`${fontBangla.className} text-4xl font-bold`}>
                                আপনি কার্টে কোন প্রোডাক্ট এড করেন নি
                            </h2>
                            <Link href={"/products"} className="btn btn-primary btn-lg btn-wide">
                                <TbHorseToy /> পন্য দেখুন
                            </Link>
                        </div>
                    ) : <Cart cartItems={formatedItems} />
                }
            </div>
        </div>
    );
};

export default CartPage;
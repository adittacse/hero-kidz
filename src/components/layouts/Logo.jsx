import Link from "next/dist/client/link";
import Image from "next/image";

const Logo = () => {
    return (
        <Link href="/" className="flex items-center gap-1">
            <Image src="/assets/logo.png" alt="logo-hero-kidz" width={50} height={40} />
            <h2 className="text-xl font-bold">Hero <span className="text-primary">Kidz</span></h2>
        </Link>
    );
};

export default Logo;
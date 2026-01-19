"use client";

import Link from "next/link";
import { usePathname } from "next/dist/client/components/navigation";

const NavLink = ({ children, href }) => {
    const path = usePathname();

    return (
        <Link href={href} className={`${path.endsWith(href) && "text-primary"} font-medium`}>
            {children}
        </Link>
    );
};

export default NavLink;
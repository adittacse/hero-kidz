"use client";
import React from "react";
import Link from "next/link";
import {usePathname} from "next/dist/client/components/navigation";

const NavLink = ({ children, href }) => {
    const path = usePathname();

    return (
        <Link href={href} className={`${path.startsWith(href) && "text-primary"} font-medium`}>
            {children}
        </Link>
    );
};

export default NavLink;
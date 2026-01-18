"use client";

import Link from "next/link";
import { BiSolidErrorAlt } from "react-icons/bi";

const Error = () => {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center gap-5">
            <BiSolidErrorAlt size={100} className="text-primary" />
            <h2 className="text-4xl font-bold">Something Went Wrong!</h2>
            <Link href="/" className="btn btn-primary btn-outline">Go to Home</Link>
        </div>
    );
};

export default Error;
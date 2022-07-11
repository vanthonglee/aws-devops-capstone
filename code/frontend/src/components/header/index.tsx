import React from "react";

import Link from "next/link";

export const Header: React.FC = () => {
    return (
        <section
            className="text-center bg-gray-800 text-white py-4 text-2xl w-full mx-auto"
            data-test="page-heading"
        >
            <Link href="/">
                <h1>Search Movies</h1>
            </Link>
        </section>
    );
};

import { Link } from "@inertiajs/react";
import React from "react";

export default function Pagination({ links }) {
    return (
        <div className="text-center mt-6 space-x-1">
            {links.map((link, index) => (
                <Link
                    preserveScroll
                    key={index}
                    href={link.url || ""}
                    className={
                        "inline-block px-4 py-2 text-sm font-medium border rounded-md transition-colors duration-200 " +
                        (link.active
                            ? "bg-gray-900 text-white border-gray-900"
                            : "text-gray-700 bg-white border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white") +
                        (!link.url
                            ? " pointer-events-none text-gray-400 bg-gray-200 border-gray-300"
                            : "")
                    }
                    dangerouslySetInnerHTML={{ __html: link.label }}
                />
            ))}
        </div>
    );
}

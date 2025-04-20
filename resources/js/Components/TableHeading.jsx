import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

export default function TableHeading({
    name,
    sortable = true,
    sort_field = null,
    sort_direction = null,
    sortChanged = () => {},
    children,
}) {
    const isSortedAsc = sort_field === name && sort_direction === "asc";
    const isSortedDesc = sort_field === name && sort_direction === "desc";

    return (
        <th
            onClick={() => sortable && sortChanged(name)}
            className={`px-4 py-3 text-sm font-medium text-gray-800 dark:text-gray-200 ${
                sortable ? "cursor-pointer" : ""
            }`}
        >
            <div className="flex items-center justify-center gap-1">
                <span className="whitespace-nowrap">{children}</span>
                {sort_field}

                {sortable && (
                    <div className="flex flex-col leading-none">
                        <ChevronUpIcon
                            className={`w-3.5 h-3.5 ${
                                isSortedAsc
                                    ? "text-blue-600 dark:text-blue-400"
                                    : "text-gray-400"
                            }`}
                        />
                        <ChevronDownIcon
                            className={`w-3.5 h-3.5 -mt-1 ${
                                isSortedDesc
                                    ? "text-blue-600 dark:text-blue-400"
                                    : "text-gray-400"
                            }`}
                        />
                    </div>
                )}
            </div>
        </th>
    );
}

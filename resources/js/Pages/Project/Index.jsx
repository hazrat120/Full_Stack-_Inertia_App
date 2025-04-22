import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "@/constants";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import TableHeading from "@/Components/TableHeading";

export default function Index({ projects, queryParams = null }) {
    queryParams = queryParams || {};

    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("project.index"), queryParams);
    };

    const onKeyPress = (name, e) => {
        if (e.key !== "Enter") return;
        searchFieldChanged(name, e.target.value);
    };

    const sortChanged = (name) => {
        if (name === queryParams.sort_field) {
            queryParams.sort_direction =
                queryParams.sort_direction === "asc" ? "desc" : "asc";
        } else {
            queryParams.sort_field = name;
            queryParams.sort_direction = "asc";
        }

        router.get(route("project.index"), queryParams);
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Projects
                    </h2>
                    <Link
                        href={route("project.create")}
                        className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
                    >
                        Add new
                    </Link>
                </div>
            }
        >
            <Head title="Projects" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="overflow-auto">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700  uppdercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                        <tr className="whitespace-nowrap">
                                            <TableHeading
                                                name="id"
                                                sort_field={
                                                    queryParams.sort_field
                                                }
                                                sort_direction={
                                                    queryParams.sort_direction
                                                }
                                                sortChanged={sortChanged}
                                            >
                                                ID
                                            </TableHeading>

                                            <th className="px-3 py-3">IMAGE</th>

                                            <TableHeading
                                                name="name"
                                                sort_field={
                                                    queryParams.sort_field
                                                }
                                                sort_direction={
                                                    queryParams.sort_direction
                                                }
                                                sortChanged={sortChanged}
                                            >
                                                NAME
                                            </TableHeading>

                                            <TableHeading
                                                name="status"
                                                sort_field={
                                                    queryParams.sort_field
                                                }
                                                sort_direction={
                                                    queryParams.sort_direction
                                                }
                                                sortChanged={sortChanged}
                                            >
                                                STATUS
                                            </TableHeading>

                                            <TableHeading
                                                name="created_at"
                                                sort_field={
                                                    queryParams.sort_field
                                                }
                                                sort_direction={
                                                    queryParams.sort_direction
                                                }
                                                sortChanged={sortChanged}
                                            >
                                                CREATE DATE
                                            </TableHeading>

                                            <TableHeading
                                                name="due_date"
                                                sort_field={
                                                    queryParams.sort_field
                                                }
                                                sort_direction={
                                                    queryParams.sort_direction
                                                }
                                                sortChanged={sortChanged}
                                            >
                                                DUE DATE
                                            </TableHeading>

                                            <th className="px-3 py-3">
                                                CREATED BY
                                            </th>

                                            <th className="px-3 py-3 text-center">
                                                ACTION
                                            </th>
                                        </tr>
                                    </thead>

                                    <thead className="text-xs text-gray-700  uppdercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                        <tr className="text-nowrap">
                                            <th className="px-3 py-3"></th>
                                            <th className="px-3 py-3"></th>
                                            <th className="px-3 py-3">
                                                <TextInput
                                                    className="w-full"
                                                    defaultValue={
                                                        queryParams.name
                                                    }
                                                    placeholder="Search by name"
                                                    onBlur={(e) => {
                                                        searchFieldChanged(
                                                            "name",
                                                            e.target.value
                                                        );
                                                    }}
                                                    onKeyPress={(e) =>
                                                        onKeyPress("name", e)
                                                    }
                                                />
                                            </th>

                                            <th className="px-3 py-3">
                                                <SelectInput
                                                    className="w-full"
                                                    defaultValue={
                                                        queryParams.status
                                                    }
                                                    onChange={(e) =>
                                                        searchFieldChanged(
                                                            "status",
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option value="">
                                                        Select Status
                                                    </option>
                                                    <option value="pending">
                                                        Pending
                                                    </option>
                                                    <option value="in_progress">
                                                        In Progress
                                                    </option>
                                                    <option value="completed">
                                                        Completed
                                                    </option>
                                                </SelectInput>
                                            </th>
                                            <th className="px-3 py-3"></th>
                                            <th className="px-3 py-3"></th>
                                            <th className="px-3 py-3"></th>
                                            <th className="px-3 py-3"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {projects.data.map((project) => (
                                            <tr
                                                key={project.id}
                                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                            >
                                                <td className="px-3 py-2">
                                                    {project.id}
                                                </td>
                                                <td className="px-3 py-2">
                                                    <img
                                                        src={project.image_path}
                                                        alt="not found"
                                                    />
                                                </td>

                                                <th className="px-3 py-2 text-gray-400 text-nowrap hover:underline">
                                                    <Link
                                                        href={route(
                                                            "project.show",
                                                            project.id
                                                        )}
                                                    >
                                                        {project.name}
                                                    </Link>
                                                </th>

                                                <td className="px-3 py-2">
                                                    <span
                                                        className={
                                                            "px-2 py-1 rounded text-white " +
                                                            PROJECT_STATUS_CLASS_MAP[
                                                                project.status
                                                            ]
                                                        }
                                                    >
                                                        {
                                                            PROJECT_STATUS_TEXT_MAP[
                                                                project.status
                                                            ]
                                                        }
                                                    </span>
                                                </td>
                                                <td className="px-3 py-2">
                                                    {project.created_at}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {project.due_date}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {project.createdBy.name}
                                                </td>

                                                <td className="px-3 py-2 text-center">
                                                    <div className="flex items-center justify-center gap-2">
                                                        <Link
                                                            href={route(
                                                                "project.edit",
                                                                project.id
                                                            )}
                                                            className="inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700 transition"
                                                        >
                                                            <PencilSquareIcon className="w-4 h-4" />
                                                            Edit
                                                        </Link>

                                                        <Link
                                                            href={route(
                                                                "project.destroy",
                                                                project.id
                                                            )}
                                                            className="inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-700 transition"
                                                        >
                                                            <TrashIcon className="w-4 h-4" />
                                                            Delete
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <Pagination links={projects.meta.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

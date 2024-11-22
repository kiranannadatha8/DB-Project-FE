import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./data-table-column-header";
import { Publications, Authors } from "@/constants/schema";

export const pubColumns: ColumnDef<Publications>[] = [
  {
    accessorKey: "publication_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }) => {
      return <p className="w-[80px]">{row.getValue("publication_id")}</p>;
    },
    filterFn: (row, id, value) => {
      return value == row.getValue(id);
    },
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      return <p className="max-w-[200px]">{row.getValue("title")}</p>;
    },
  },
  {
    accessorKey: "year",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Year" />
    ),
    cell: ({ row }) => {
      return <p className="w-[80px]">{row.getValue("year")}</p>;
    },
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => {
      return <p className="w-[80px] capitalize">{row.getValue("type")}</p>;
    },
  },
  {
    accessorKey: "summary",
    header: "Summary",
    cell: ({ row }) => {
      return (
        <p className="max-w-[500px] truncate">{row.getValue("summary")}</p>
      );
    },
  },
];

export const authColumns: ColumnDef<Authors>[] = [
  {
    accessorKey: "author_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Publication ID" />
    ),
    enableSorting: false,
    filterFn: (row, id, value) => {
      return value == row.getValue(id);
    },
  },
  {
    accessorKey: "author",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Author" />
    ),
    enableSorting: false,
  },
];

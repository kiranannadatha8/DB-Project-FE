import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { DataTableToolbar } from "./data-table-toolbar";
import { DataTable } from "./data-table";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

interface DataTableWrapperProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  setTab: React.Dispatch<React.SetStateAction<string>>;
  currentTab: string;
  className?: string;
}

const tableFilter = ["ID", "Title", "Year", "Type"];

export function DataTableWrapper<TData, TValue>({
  columns,
  data,
  setTab,
  currentTab,
  className,
}: DataTableWrapperProps<TData, TValue>) {
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const table = useReactTable({
    data,
    columns,
    state: {
      columnVisibility,
      columnFilters,
    },
    enableRowSelection: true,
    onColumnVisibilityChange: setColumnVisibility,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <>
      <DataTableToolbar table={table} setTab={setTab} currentTab={currentTab} />
      {/* <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-32">
            <Plus /> Add Filter
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          {tableFilter.map((filter) => (
            <p>{filter}</p>
          ))}
        </PopoverContent>
      </Popover> */}
      <DataTable
        columns={columns}
        table={table}
        currentTab={currentTab}
        className={className}
      />
    </>
  );
}

import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { Table } from "@tanstack/react-table";
import { DataTableViewOptions } from "./data-table-view-options";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  setTab: React.Dispatch<React.SetStateAction<string>>;
  currentTab: string;
}

export function DataTableToolbar<TData>({
  table,
  setTab,
  currentTab,
}: DataTableToolbarProps<TData>) {
  return (
    <>
      <div className="flex justify-between">
        <Tabs defaultValue="Publications" className="w-[280px]">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger
              value="Publications"
              onClick={() => setTab("Publications")}
            >
              Publications
            </TabsTrigger>
            <TabsTrigger value="Authors" onClick={() => setTab("Authors")}>
              Authors
            </TabsTrigger>
            <TabsTrigger
              value="table-filters"
              onClick={() => setTab("table-filters")}
            >
              Table Filters
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex items-center space-x-2">
          <Input
            type="search"
            name="search"
            placeholder="Search..."
            value={
              (table
                .getColumn(
                  currentTab === "Publications" ? "publication_id" : "author_id"
                )
                ?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table
                .getColumn(
                  currentTab === "Publications" ? "publication_id" : "author_id"
                )
                ?.setFilterValue(event.target.value)
            }
          />
          <DataTableViewOptions table={table} />
          {/* <Button
            variant="outline"
            size="sm"
            className="ml-auto hidden h-8 lg:flex"
          >
            <Filter />
            Filter
          </Button> */}
        </div>
      </div>
    </>
  );
}

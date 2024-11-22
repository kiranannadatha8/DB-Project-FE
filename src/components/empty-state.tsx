import { Button } from "./ui/button";
import { Plus } from "lucide-react";

export function EmptyState() {
  return (
    <div className=" h-full flex items-center justify-center">
      <div className="flex flex-col gap-2">
        <p>Add Filters to view data.</p>
        <Button variant="outline" className="w-32">
          <Plus /> Add Filter
        </Button>
      </div>
    </div>
  );
}

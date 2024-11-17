import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

export function ProgressWrapper() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid gap-2">
      <p>Please wait, while we load data for you... </p>
      <Progress value={progress} className="w-full" />
    </div>
  );
}

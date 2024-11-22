import { ThemeProvider } from "@/components/theme-provider";
import { LoginForm } from "./components/login-form";
import { ModeToggle } from "./components/mode-toggle";
import DataTableWrapper from "./components/data-table-wrapper";
import HomePage from "./components/home/page";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="flex h-screen w-full items-center justify-center px-4 relative">
        {/* <LoginForm /> */}
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;

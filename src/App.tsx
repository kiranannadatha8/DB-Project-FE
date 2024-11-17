import { ThemeProvider } from "@/components/theme-provider";
import { LoginForm } from "./components/login-form";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="flex h-screen w-full items-center justify-center px-4 relative">
        <ModeToggle />
        <LoginForm />
      </div>
    </ThemeProvider>
  );
}

export default App;
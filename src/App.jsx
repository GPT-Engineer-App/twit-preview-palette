import React from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.jsx";

const App = () => (
  <React.StrictMode>
    <TooltipProvider>
      <Toaster />
      <Index />
    </TooltipProvider>
  </React.StrictMode>
);

export default App;
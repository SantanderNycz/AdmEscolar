import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/teachers" element={<div className="p-6">Professores - Em desenvolvimento</div>} />
            <Route path="/classes" element={<div className="p-6">Turmas - Em desenvolvimento</div>} />
            <Route path="/grades" element={<div className="p-6">Notas - Em desenvolvimento</div>} />
            <Route path="/calendar" element={<div className="p-6">Calendário - Em desenvolvimento</div>} />
            <Route path="/reports" element={<div className="p-6">Relatórios - Em desenvolvimento</div>} />
            <Route path="/settings" element={<div className="p-6">Configurações - Em desenvolvimento</div>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

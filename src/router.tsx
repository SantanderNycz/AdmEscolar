import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/components/Layout";

import Dashboard from "@/pages/Dashboard";
import Students from "@/pages/Students";
import Teachers from "@/pages/Teachers";
import Classes from "@/pages/Classes";
import Grades from "@/pages/Grades";
import NotFound from "@/pages/NotFound";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "students", element: <Students /> },
        { path: "teachers", element: <Teachers /> },
        { path: "classes", element: <Classes /> },
        { path: "grades", element: <Grades /> },
        {
          path: "calendar",
          element: <div className="p-6">Calendário - Em desenvolvimento</div>,
        },
        {
          path: "reports",
          element: <div className="p-6">Relatórios - Em desenvolvimento</div>,
        },
        {
          path: "settings",
          element: (
            <div className="p-6">Configurações - Em desenvolvimento</div>
          ),
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]
);

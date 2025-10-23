import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Plus, Filter, MoreHorizontal, Users } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const studentsData = [
  {
    id: 1,
    name: "Ana Silva",
    class: "9º A",
    grade: "9º Ano",
    status: "Ativo",
    email: "ana.silva@email.com",
    phone: "(11) 99999-9999",
    enrollDate: "2024-02-01",
    average: 8.5,
  },
  {
    id: 2,
    name: "Carlos Santos",
    class: "8º B",
    grade: "8º Ano",
    status: "Ativo",
    email: "carlos.santos@email.com",
    phone: "(11) 88888-8888",
    enrollDate: "2024-02-01",
    average: 7.2,
  },
  {
    id: 3,
    name: "Maria Oliveira",
    class: "9º A",
    grade: "9º Ano",
    status: "Ativo",
    email: "maria.oliveira@email.com",
    phone: "(11) 77777-7777",
    enrollDate: "2024-02-01",
    average: 9.1,
  },
  {
    id: 4,
    name: "João Pereira",
    class: "7º C",
    grade: "7º Ano",
    status: "Transferido",
    email: "joao.pereira@email.com",
    phone: "(11) 66666-6666",
    enrollDate: "2024-02-01",
    average: 6.8,
  },
];

export default function Students() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStudents] = useState(studentsData);

  const getStatusBadge = (status: string) => {
    const variants = {
      Ativo: "bg-green-100 text-green-800",
      Transferido: "bg-yellow-100 text-yellow-800",
      Inativo: "bg-red-100 text-red-800",
    };
    return (
      variants[status as keyof typeof variants] || "bg-slate-100 text-slate-600"
    );
  };

  const getAverageColor = (average: number) => {
    if (average >= 8) return "text-green-600";
    if (average >= 6) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Gestão de Alunos
          </h1>
          <p className="text-slate-600">Gerencie informações dos estudantes</p>
        </div>
        <Button className="bg-blue-500 text-white hover:bg-blue-600">
          <Plus className="w-4 h-4 mr-2" />
          Novo Aluno
        </Button>
      </div>

      {/* Filters */}
      <Card className="bg-white">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Buscar alunos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="sm:w-auto">
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Students Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudents.map((student) => (
          <Card
            key={student.id}
            className="animate-slide-up hover:shadow-md transition-all duration-300 bg-white"
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-blue-500 text-white">
                      {student.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg text-slate-900">
                      {student.name}
                    </CardTitle>
                    <p className="text-sm text-slate-500">{student.class}</p>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Ver Detalhes</DropdownMenuItem>
                    <DropdownMenuItem>Editar</DropdownMenuItem>
                    <DropdownMenuItem>Ver Notas</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      Remover
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">Status:</span>
                <Badge className={getStatusBadge(student.status)}>
                  {student.status}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">Média:</span>
                <span
                  className={`text-sm font-semibold ${getAverageColor(
                    student.average
                  )}`}
                >
                  {student.average.toFixed(1)}
                </span>
              </div>
              <div className="pt-2 border-t border-slate-200">
                <p className="text-xs text-slate-500 mb-1">Contato:</p>
                <p className="text-sm text-slate-900">{student.email}</p>
                <p className="text-sm text-slate-500">{student.phone}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Card */}
      <Card className="animate-fade-in bg-white">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Total de Alunos
              </h3>
              <p className="text-2xl font-bold text-blue-600">
                {filteredStudents.length}
              </p>
            </div>
            <div className="flex-1" />
            <div className="text-right">
              <p className="text-sm text-slate-500">Ativos</p>
              <p className="text-lg font-semibold text-green-600">
                {filteredStudents.filter((s) => s.status === "Ativo").length}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

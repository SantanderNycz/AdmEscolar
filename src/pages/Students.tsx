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
      "Ativo": "bg-success text-success-foreground",
      "Transferido": "bg-warning text-warning-foreground",
      "Inativo": "bg-destructive text-destructive-foreground",
    };
    return variants[status as keyof typeof variants] || "bg-muted text-muted-foreground";
  };

  const getAverageColor = (average: number) => {
    if (average >= 8) return "text-success";
    if (average >= 6) return "text-warning";
    return "text-destructive";
  };

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Gestão de Alunos
          </h1>
          <p className="text-muted-foreground">
            Gerencie informações dos estudantes
          </p>
        </div>
        <Button className="bg-gradient-primary text-white hover:opacity-90">
          <Plus className="w-4 h-4 mr-2" />
          Novo Aluno
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
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
          <Card key={student.id} className="animate-slide-up hover:shadow-medium transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-gradient-primary text-white">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{student.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{student.class}</p>
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
                    <DropdownMenuItem className="text-destructive">
                      Remover
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Status:</span>
                <Badge className={getStatusBadge(student.status)}>
                  {student.status}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Média:</span>
                <span className={`text-sm font-semibold ${getAverageColor(student.average)}`}>
                  {student.average.toFixed(1)}
                </span>
              </div>
              <div className="pt-2 border-t">
                <p className="text-xs text-muted-foreground mb-1">Contato:</p>
                <p className="text-sm">{student.email}</p>
                <p className="text-sm text-muted-foreground">{student.phone}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Card */}
      <Card className="animate-fade-in">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Total de Alunos</h3>
              <p className="text-2xl font-bold text-primary">{filteredStudents.length}</p>
            </div>
            <div className="flex-1" />
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Ativos</p>
              <p className="text-lg font-semibold text-success">
                {filteredStudents.filter(s => s.status === "Ativo").length}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
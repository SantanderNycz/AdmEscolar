import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Search,
  Plus,
  Filter,
  MoreHorizontal,
  UserCheck,
  Phone,
  Mail,
  BookOpen,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const teachersData = [
  {
    id: 1,
    name: "Prof. Ana Costa",
    subject: "Matemática",
    email: "ana.costa@escola.com",
    phone: "(11) 99999-1111",
    status: "Ativo",
    classes: ["9º A", "9º B", "8º A"],
    experience: "15 anos",
    degree: "Licenciatura em Matemática",
  },
  {
    id: 2,
    name: "Prof. Carlos Lima",
    subject: "História",
    email: "carlos.lima@escola.com",
    phone: "(11) 99999-2222",
    status: "Ativo",
    classes: ["8º B", "7º A", "7º C"],
    experience: "8 anos",
    degree: "Licenciatura em História",
  },
  {
    id: 3,
    name: "Prof. Maria Santos",
    subject: "Português",
    email: "maria.santos@escola.com",
    phone: "(11) 99999-3333",
    status: "Ativo",
    classes: ["9º A", "8º A", "8º B"],
    experience: "12 anos",
    degree: "Letras - Português",
  },
  {
    id: 4,
    name: "Prof. João Silva",
    subject: "Ciências",
    email: "joao.silva@escola.com",
    phone: "(11) 99999-4444",
    status: "Licença",
    classes: ["7º A", "7º B"],
    experience: "6 anos",
    degree: "Licenciatura em Biologia",
  },
  {
    id: 5,
    name: "Prof. Laura Oliveira",
    subject: "Inglês",
    email: "laura.oliveira@escola.com",
    phone: "(11) 99999-5555",
    status: "Ativo",
    classes: ["9º A", "9º B", "8º A", "8º B"],
    experience: "10 anos",
    degree: "Letras - Inglês",
  },
];

export default function Teachers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTeachers] = useState(teachersData);

  const getStatusBadge = (status: string) => {
    const variants = {
      Ativo: "bg-green-100 text-green-800",
      Licença: "bg-yellow-100 text-yellow-800",
      Inativo: "bg-red-100 text-red-800",
    };
    return (
      variants[status as keyof typeof variants] || "bg-slate-100 text-slate-600"
    );
  };

  const getSubjectColor = (subject: string) => {
    const colors = {
      Matemática: "bg-blue-500",
      História: "bg-purple-500",
      Português: "bg-green-500",
      Ciências: "bg-orange-500",
      Inglês: "bg-pink-500",
    };
    return colors[subject as keyof typeof colors] || "bg-slate-500";
  };

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Gestão de Professores
          </h1>
          <p className="text-slate-600">
            Gerencie informações do corpo docente
          </p>
        </div>
        <Button className="bg-blue-500 text-white hover:bg-blue-600">
          <Plus className="w-4 h-4 mr-2" />
          Novo Professor
        </Button>
      </div>

      {/* Filters */}
      <Card className="bg-white">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Buscar professores..."
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

      {/* Teachers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeachers.map((teacher) => (
          <Card
            key={teacher.id}
            className="animate-slide-up hover:shadow-md transition-all duration-300 bg-white"
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="" />
                    <AvatarFallback
                      className={`${getSubjectColor(
                        teacher.subject
                      )} text-white`}
                    >
                      {teacher.name
                        .split(" ")
                        .slice(1, 3)
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg text-slate-900">
                      {teacher.name}
                    </CardTitle>
                    <p className="text-sm text-slate-500">{teacher.subject}</p>
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
                    <DropdownMenuItem>Ver Turmas</DropdownMenuItem>
                    <DropdownMenuItem>Horários</DropdownMenuItem>
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
                <Badge className={getStatusBadge(teacher.status)}>
                  {teacher.status}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">Experiência:</span>
                <span className="text-sm font-medium text-slate-900">
                  {teacher.experience}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">Turmas:</span>
                <span className="text-sm font-medium text-blue-600">
                  {teacher.classes.length}
                </span>
              </div>
              <div className="pt-2 border-t border-slate-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Mail className="w-3 h-3 text-slate-400" />
                  <p className="text-xs text-slate-900">{teacher.email}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-3 h-3 text-slate-400" />
                  <p className="text-xs text-slate-500">{teacher.phone}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="animate-fade-in bg-white">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Total de Professores
                </h3>
                <p className="text-2xl font-bold text-blue-600">
                  {filteredTeachers.length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="animate-fade-in bg-white">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Ativos</h3>
                <p className="text-2xl font-bold text-green-600">
                  {filteredTeachers.filter((t) => t.status === "Ativo").length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="animate-fade-in bg-white">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Disciplinas
                </h3>
                <p className="text-2xl font-bold text-orange-600">
                  {new Set(filteredTeachers.map((t) => t.subject)).size}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

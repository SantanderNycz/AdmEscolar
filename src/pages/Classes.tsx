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
  BookOpen,
  Users,
  Clock,
  GraduationCap,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const classesData = [
  {
    id: 1,
    name: "9º Ano A",
    grade: "9º Ano",
    teacher: "Prof. Ana Costa",
    subject: "Matemática",
    students: 28,
    schedule: "08:00 - 09:30",
    room: "Sala 101",
    status: "Ativo",
    period: "Manhã",
  },
  {
    id: 2,
    name: "8º Ano B",
    grade: "8º Ano",
    teacher: "Prof. Carlos Lima",
    subject: "História",
    students: 25,
    schedule: "09:45 - 11:15",
    room: "Sala 203",
    status: "Ativo",
    period: "Manhã",
  },
  {
    id: 3,
    name: "9º Ano A",
    grade: "9º Ano",
    teacher: "Prof. Maria Santos",
    subject: "Português",
    students: 28,
    schedule: "14:00 - 15:30",
    room: "Sala 105",
    status: "Ativo",
    period: "Tarde",
  },
  {
    id: 4,
    name: "7º Ano C",
    grade: "7º Ano",
    teacher: "Prof. João Silva",
    subject: "Ciências",
    students: 22,
    schedule: "15:45 - 17:15",
    room: "Lab. Ciências",
    status: "Suspenso",
    period: "Tarde",
  },
  {
    id: 5,
    name: "8º Ano A",
    grade: "8º Ano",
    teacher: "Prof. Laura Oliveira",
    subject: "Inglês",
    students: 26,
    schedule: "10:30 - 12:00",
    room: "Sala 302",
    status: "Ativo",
    period: "Manhã",
  },
  {
    id: 6,
    name: "7º Ano A",
    grade: "7º Ano",
    teacher: "Prof. Ana Costa",
    subject: "Matemática",
    students: 24,
    schedule: "13:30 - 15:00",
    room: "Sala 101",
    status: "Ativo",
    period: "Tarde",
  },
];

export default function Classes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredClasses] = useState(classesData);

  const getStatusBadge = (status: string) => {
    const variants = {
      Ativo: "bg-green-100 text-green-800",
      Suspenso: "bg-yellow-100 text-yellow-800",
      Finalizado: "bg-red-100 text-red-800",
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

  const getPeriodColor = (period: string) => {
    return period === "Manhã" ? "text-blue-600" : "text-orange-600";
  };

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Gestão de Turmas
          </h1>
          <p className="text-slate-600">
            Gerencie turmas e horários das disciplinas
          </p>
        </div>
        <Button className="bg-blue-500 text-white hover:bg-blue-600">
          <Plus className="w-4 h-4 mr-2" />
          Nova Turma
        </Button>
      </div>

      {/* Filters */}
      <Card className="bg-white">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Buscar turmas..."
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

      {/* Classes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClasses.map((classItem) => (
          <Card
            key={classItem.id}
            className="animate-slide-up hover:shadow-md transition-all duration-300 bg-white"
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="" />
                    <AvatarFallback
                      className={`${getSubjectColor(
                        classItem.subject
                      )} text-white`}
                    >
                      {classItem.grade.split(" ")[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg text-slate-900">
                      {classItem.name}
                    </CardTitle>
                    <p className="text-sm text-slate-500">
                      {classItem.subject}
                    </p>
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
                    <DropdownMenuItem>Lista de Alunos</DropdownMenuItem>
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
                <Badge className={getStatusBadge(classItem.status)}>
                  {classItem.status}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">Professor:</span>
                <span className="text-sm font-medium text-slate-900">
                  {classItem.teacher.replace("Prof. ", "")}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">Alunos:</span>
                <span className="text-sm font-medium text-blue-600">
                  {classItem.students}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">Período:</span>
                <span
                  className={`text-sm font-medium ${getPeriodColor(
                    classItem.period
                  )}`}
                >
                  {classItem.period}
                </span>
              </div>
              <div className="pt-2 border-t border-slate-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-3 h-3 text-slate-400" />
                  <p className="text-xs text-slate-900">{classItem.schedule}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-3 h-3 text-slate-400" />
                  <p className="text-xs text-slate-500">{classItem.room}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="animate-fade-in bg-white">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Total de Turmas
                </h3>
                <p className="text-2xl font-bold text-blue-600">
                  {filteredClasses.length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="animate-fade-in bg-white">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Ativas</h3>
                <p className="text-2xl font-bold text-green-600">
                  {filteredClasses.filter((c) => c.status === "Ativo").length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="animate-fade-in bg-white">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Total de Alunos
                </h3>
                <p className="text-2xl font-bold text-orange-600">
                  {filteredClasses.reduce((acc, c) => acc + c.students, 0)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="animate-fade-in bg-white">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Média por Turma
                </h3>
                <p className="text-2xl font-bold text-purple-600">
                  {Math.round(
                    filteredClasses.reduce((acc, c) => acc + c.students, 0) /
                      filteredClasses.length
                  )}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

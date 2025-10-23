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
  Award,
  TrendingUp,
  TrendingDown,
  Minus,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const gradesData = [
  {
    id: 1,
    studentName: "Ana Silva",
    class: "9º A",
    subject: "Matemática",
    grade1: 8.5,
    grade2: 7.8,
    grade3: 9.2,
    grade4: 8.0,
    average: 8.4,
    status: "Aprovado",
    teacher: "Prof. Ana Costa",
  },
  {
    id: 2,
    studentName: "Carlos Santos",
    class: "8º B",
    subject: "História",
    grade1: 7.0,
    grade2: 6.5,
    grade3: 8.0,
    grade4: 7.5,
    average: 7.3,
    status: "Aprovado",
    teacher: "Prof. Carlos Lima",
  },
  {
    id: 3,
    studentName: "Maria Oliveira",
    class: "9º A",
    subject: "Português",
    grade1: 9.0,
    grade2: 8.8,
    grade3: 9.5,
    grade4: 9.2,
    average: 9.1,
    status: "Aprovado",
    teacher: "Prof. Maria Santos",
  },
  {
    id: 4,
    studentName: "João Pereira",
    class: "7º C",
    subject: "Ciências",
    grade1: 6.0,
    grade2: 5.5,
    grade3: 7.0,
    grade4: 6.8,
    average: 6.3,
    status: "Recuperação",
    teacher: "Prof. João Silva",
  },
  {
    id: 5,
    studentName: "Laura Costa",
    class: "8º A",
    subject: "Inglês",
    grade1: 8.0,
    grade2: 8.5,
    grade3: 7.8,
    grade4: 8.2,
    average: 8.1,
    status: "Aprovado",
    teacher: "Prof. Laura Oliveira",
  },
  {
    id: 6,
    studentName: "Pedro Santos",
    class: "7º A",
    subject: "Matemática",
    grade1: 5.0,
    grade2: 4.8,
    grade3: 6.0,
    grade4: 5.5,
    average: 5.3,
    status: "Reprovado",
    teacher: "Prof. Ana Costa",
  },
];

export default function Grades() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredGrades] = useState(gradesData);

  const getStatusBadge = (status: string) => {
    const variants = {
      Aprovado: "bg-green-100 text-green-800",
      Recuperação: "bg-yellow-100 text-yellow-800",
      Reprovado: "bg-red-100 text-red-800",
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

  const getTrendIcon = (grades: number[]) => {
    const firstHalf = (grades[0] + grades[1]) / 2;
    const secondHalf = (grades[2] + grades[3]) / 2;

    if (secondHalf > firstHalf)
      return <TrendingUp className="w-4 h-4 text-green-500" />;
    if (secondHalf < firstHalf)
      return <TrendingDown className="w-4 h-4 text-red-500" />;
    return <Minus className="w-4 h-4 text-slate-500" />;
  };

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Gestão de Notas
          </h1>
          <p className="text-slate-600">
            Acompanhe o desempenho acadêmico dos alunos
          </p>
        </div>
        <Button className="bg-blue-500 text-white hover:bg-blue-600">
          <Plus className="w-4 h-4 mr-2" />
          Lançar Notas
        </Button>
      </div>

      {/* Filters */}
      <Card className="bg-white">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Buscar por aluno ou disciplina..."
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

      {/* Grades Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredGrades.map((grade) => (
          <Card
            key={grade.id}
            className="animate-slide-up hover:shadow-md transition-all duration-300 bg-white"
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="" />
                    <AvatarFallback
                      className={`${getSubjectColor(grade.subject)} text-white`}
                    >
                      {grade.studentName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg text-slate-900">
                      {grade.studentName}
                    </CardTitle>
                    <p className="text-sm text-slate-500">
                      {grade.class} - {grade.subject}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {getTrendIcon([
                    grade.grade1,
                    grade.grade2,
                    grade.grade3,
                    grade.grade4,
                  ])}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Ver Histórico</DropdownMenuItem>
                      <DropdownMenuItem>Editar Notas</DropdownMenuItem>
                      <DropdownMenuItem>Relatório</DropdownMenuItem>
                      <DropdownMenuItem>Observações</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-4 gap-3">
                <div className="text-center">
                  <p className="text-xs text-slate-500 mb-1">1º Bim</p>
                  <p className="text-lg font-semibold text-slate-900">
                    {grade.grade1.toFixed(1)}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-500 mb-1">2º Bim</p>
                  <p className="text-lg font-semibold text-slate-900">
                    {grade.grade2.toFixed(1)}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-500 mb-1">3º Bim</p>
                  <p className="text-lg font-semibold text-slate-900">
                    {grade.grade3.toFixed(1)}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-500 mb-1">4º Bim</p>
                  <p className="text-lg font-semibold text-slate-900">
                    {grade.grade4.toFixed(1)}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-slate-500">Média:</span>
                  <span
                    className={`text-xl font-bold ${getAverageColor(
                      grade.average
                    )}`}
                  >
                    {grade.average.toFixed(1)}
                  </span>
                </div>
                <Badge className={getStatusBadge(grade.status)}>
                  {grade.status}
                </Badge>
              </div>

              <div className="pt-2">
                <p className="text-xs text-slate-500">
                  Professor: {grade.teacher}
                </p>
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
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Total de Registros
                </h3>
                <p className="text-2xl font-bold text-blue-600">
                  {filteredGrades.length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="animate-fade-in bg-white">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Aprovados
                </h3>
                <p className="text-2xl font-bold text-green-600">
                  {filteredGrades.filter((g) => g.status === "Aprovado").length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="animate-fade-in bg-white">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Recuperação
                </h3>
                <p className="text-2xl font-bold text-yellow-600">
                  {
                    filteredGrades.filter((g) => g.status === "Recuperação")
                      .length
                  }
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="animate-fade-in bg-white">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-slate-500 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Média Geral
                </h3>
                <p className="text-2xl font-bold text-slate-600">
                  {(
                    filteredGrades.reduce((acc, g) => acc + g.average, 0) /
                    filteredGrades.length
                  ).toFixed(1)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

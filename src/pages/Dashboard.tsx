import { MetricCard } from "@/components/MetricCard";
import {
  Users,
  UserCheck,
  BookOpen,
  Calendar,
  TrendingUp,
  Award,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Dashboard Administrativo
        </h1>
        <p className="text-slate-600">
          Visão geral da sua instituição de ensino
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <MetricCard
          title="Total de Alunos"
          value="1,234"
          change={{ value: "+5.2% este mês", type: "increase" }}
          icon={Users}
          gradient="primary"
        />
        <MetricCard
          title="Professores Ativos"
          value="87"
          change={{ value: "+2 novos", type: "increase" }}
          icon={UserCheck}
          gradient="secondary"
        />
        <MetricCard
          title="Turmas Ativas"
          value="42"
          change={{ value: "Estável", type: "neutral" }}
          icon={BookOpen}
          gradient="accent"
        />
        <MetricCard
          title="Taxa de Presença"
          value="94.5%"
          change={{ value: "+1.2%", type: "increase" }}
          icon={TrendingUp}
          gradient="primary"
        />
        <MetricCard
          title="Eventos do Mês"
          value="15"
          change={{ value: "3 pendentes", type: "neutral" }}
          icon={Calendar}
          gradient="secondary"
        />
        <MetricCard
          title="Média Geral"
          value="8.2"
          change={{ value: "+0.3 pontos", type: "increase" }}
          icon={Award}
          gradient="accent"
        />
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="animate-slide-up bg-white">
          <CardHeader>
            <CardTitle className="text-slate-900">
              Atividades Recentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 rounded-lg bg-slate-50">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">
                    Novo aluno matriculado
                  </p>
                  <p className="text-xs text-slate-500">Ana Silva - 9º Ano</p>
                </div>
                <span className="text-xs text-slate-500">2h atrás</span>
              </div>

              <div className="flex items-center space-x-4 p-3 rounded-lg bg-slate-50">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">
                    Reunião de pais agendada
                  </p>
                  <p className="text-xs text-slate-500">
                    Turma 8º A - 15/11/2024
                  </p>
                </div>
                <span className="text-xs text-slate-500">4h atrás</span>
              </div>

              <div className="flex items-center space-x-4 p-3 rounded-lg bg-slate-50">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">
                    Notas do 3º bimestre lançadas
                  </p>
                  <p className="text-xs text-slate-500">Matemática - 7º Ano</p>
                </div>
                <span className="text-xs text-slate-500">1 dia atrás</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="animate-slide-up bg-white">
          <CardHeader>
            <CardTitle className="text-slate-900">Próximos Eventos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 rounded-lg border border-slate-200">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex flex-col items-center justify-center text-white">
                  <span className="text-lg font-bold">15</span>
                  <span className="text-xs">NOV</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">
                    Reunião de Pais
                  </p>
                  <p className="text-xs text-slate-500">
                    Todas as turmas - 19h00
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-3 rounded-lg border border-slate-200">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex flex-col items-center justify-center text-white">
                  <span className="text-lg font-bold">22</span>
                  <span className="text-xs">NOV</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">
                    Feira de Ciências
                  </p>
                  <p className="text-xs text-slate-500">
                    Ensino Fundamental - 14h00
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-3 rounded-lg border border-slate-200">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex flex-col items-center justify-center text-white">
                  <span className="text-lg font-bold">01</span>
                  <span className="text-xs">DEZ</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">
                    Entrega de Boletins
                  </p>
                  <p className="text-xs text-slate-500">
                    Todas as turmas - 8h00
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

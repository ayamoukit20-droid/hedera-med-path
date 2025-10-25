import { TopBar } from "@/components/layout/TopBar";
import { Sidebar } from "@/components/layout/Sidebar";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { Package, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const recentActivity = [
  { id: 1, lot: "LOT-2024-001", status: "En transit", location: "Centre de distribution A", time: "il y a 2 heures" },
  { id: 2, lot: "LOT-2024-002", status: "Livré", location: "Pharmacie B", time: "il y a 5 heures" },
  { id: 3, lot: "LOT-2024-003", status: "Fabrication", location: "Usine C", time: "il y a 1 jour" },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <TopBar userRole="Fabricant" onLogout={() => navigate("/")} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-foreground">Aperçu du tableau de bord</h1>
            <p className="text-muted-foreground">Bienvenue ! Voici ce qui se passe aujourd'hui.</p>
          </div>

          {/* Stats Grid */}
          <div className="mb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              title="Total des lots"
              value="1 284"
              icon={Package}
              trend={{ value: "12% depuis le mois dernier", positive: true }}
              variant="default"
            />
            <StatsCard
              title="Expéditions actives"
              value="342"
              icon={TrendingUp}
              trend={{ value: "8% depuis la semaine dernière", positive: true }}
              variant="success"
            />
            <StatsCard
              title="Alertes IA"
              value="23"
              icon={AlertTriangle}
              trend={{ value: "3% depuis hier", positive: false }}
              variant="warning"
            />
            <StatsCard
              title="Livraisons vérifiées"
              value="892"
              icon={CheckCircle}
              trend={{ value: "15% depuis le mois dernier", positive: true }}
              variant="success"
            />
          </div>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Activité récente</CardTitle>
              <CardDescription>Dernières mises à jour de votre chaîne d'approvisionnement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center justify-between rounded-lg border border-border p-4 transition-all hover:bg-muted/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Package className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{activity.lot}</p>
                        <p className="text-sm text-muted-foreground">{activity.location}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                        {activity.status}
                      </span>
                      <p className="mt-1 text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}

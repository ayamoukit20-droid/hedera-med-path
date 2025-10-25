import { TopBar } from "@/components/layout/TopBar";
import { Sidebar } from "@/components/layout/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Clock, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const alerts = [
  {
    id: 1,
    type: "Rupture suspecte",
    severity: "high",
    lot: "LOT-2024-001",
    description: "Retard inattendu détecté dans le calendrier d'expédition",
    location: "Centre de distribution A",
    time: "il y a 2 heures",
  },
  {
    id: 2,
    type: "Alerte de surstock",
    severity: "medium",
    lot: "LOT-2024-003",
    description: "Les niveaux de stock dépassent la plage normale de 45%",
    location: "Pharmacie B",
    time: "il y a 5 heures",
  },
  {
    id: 3,
    type: "Incohérence de localisation",
    severity: "high",
    lot: "LOT-2024-002",
    description: "Les coordonnées GPS ne correspondent pas à l'itinéraire prévu",
    location: "Inconnue",
    time: "il y a 1 jour",
  },
];

const severityColors: Record<string, "destructive" | "default" | "secondary"> = {
  high: "destructive",
  medium: "default",
  low: "secondary",
};

export default function AIAlerts() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <TopBar userRole="Fabricant" onLogout={() => navigate("/")} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-foreground">Alertes d'anomalies IA</h1>
            <p className="text-muted-foreground">Détection en temps réel des anomalies de la chaîne d'approvisionnement</p>
          </div>

          <div className="space-y-4">
            {alerts.map((alert) => (
              <Card key={alert.id} className="border-l-4 border-l-destructive">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-destructive/10 p-3">
                        <AlertTriangle className="h-5 w-5 text-destructive" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-lg">{alert.type}</CardTitle>
                          <Badge variant={severityColors[alert.severity]}>
                            {alert.severity.toUpperCase()}
                          </Badge>
                        </div>
                        <CardDescription className="mt-1">
                          Lot : <span className="font-medium">{alert.lot}</span>
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-foreground">{alert.description}</p>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {alert.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {alert.time}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

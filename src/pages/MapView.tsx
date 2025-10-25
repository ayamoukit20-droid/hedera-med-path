import { TopBar } from "@/components/layout/TopBar";
import { Sidebar } from "@/components/layout/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { MapPin } from "lucide-react";

export default function MapView() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <TopBar userRole="Fabricant" onLogout={() => navigate("/")} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-foreground">Suivi géographique</h1>
            <p className="text-muted-foreground">Visualisez le parcours géographique des lots de médicaments</p>
          </div>

          <Card className="h-[600px]">
            <CardHeader>
              <CardTitle>Vue cartographique</CardTitle>
              <CardDescription>Suivi de localisation en temps réel</CardDescription>
            </CardHeader>
            <CardContent className="flex h-full items-center justify-center">
              <div className="flex flex-col items-center gap-4 text-muted-foreground">
                <MapPin className="h-16 w-16" />
                <p className="text-lg">Intégration de la carte bientôt disponible</p>
                <p className="text-sm">Carte interactive avec suivi des lots en temps réel</p>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}

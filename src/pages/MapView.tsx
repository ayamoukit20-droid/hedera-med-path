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
        <TopBar userRole="Manufacturer" onLogout={() => navigate("/")} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-foreground">Geographic Tracking</h1>
            <p className="text-muted-foreground">Visualize the geographic path of medicine lots</p>
          </div>

          <Card className="h-[600px]">
            <CardHeader>
              <CardTitle>Map View</CardTitle>
              <CardDescription>Real-time location tracking</CardDescription>
            </CardHeader>
            <CardContent className="flex h-full items-center justify-center">
              <div className="flex flex-col items-center gap-4 text-muted-foreground">
                <MapPin className="h-16 w-16" />
                <p className="text-lg">Map integration coming soon</p>
                <p className="text-sm">Interactive map with real-time lot tracking</p>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}

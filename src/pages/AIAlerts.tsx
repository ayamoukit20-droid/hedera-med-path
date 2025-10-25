import { TopBar } from "@/components/layout/TopBar";
import { Sidebar } from "@/components/layout/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Clock, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const alerts = [
  {
    id: 1,
    type: "Suspicious Break",
    severity: "high",
    lot: "LOT-2024-001",
    description: "Unexpected delay detected in shipment timeline",
    location: "Distribution Center A",
    time: "2 hours ago",
  },
  {
    id: 2,
    type: "Overstock Alert",
    severity: "medium",
    lot: "LOT-2024-003",
    description: "Inventory levels exceed normal range by 45%",
    location: "Pharmacy B",
    time: "5 hours ago",
  },
  {
    id: 3,
    type: "Location Inconsistency",
    severity: "high",
    lot: "LOT-2024-002",
    description: "GPS coordinates don't match expected route",
    location: "Unknown",
    time: "1 day ago",
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
        <TopBar userRole="Manufacturer" onLogout={() => navigate("/")} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-foreground">AI Anomaly Alerts</h1>
            <p className="text-muted-foreground">Real-time detection of supply chain anomalies</p>
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
                          Lot: <span className="font-medium">{alert.lot}</span>
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

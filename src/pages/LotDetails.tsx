import { TopBar } from "@/components/layout/TopBar";
import { Sidebar } from "@/components/layout/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Factory, Truck, Building2, CheckCircle } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const traceabilityPath = [
  {
    stage: "Manufacturing",
    location: "Factory C - Mumbai, India",
    timestamp: "2024-01-10 08:30:00",
    hash: "0x1a2b3c4d...",
    icon: Factory,
    completed: true,
  },
  {
    stage: "Distribution",
    location: "Distribution Center A - Delhi, India",
    timestamp: "2024-01-12 14:15:00",
    hash: "0x5e6f7g8h...",
    icon: Truck,
    completed: true,
  },
  {
    stage: "Pharmacy",
    location: "Pharmacy B - Bangalore, India",
    timestamp: "2024-01-14 10:00:00",
    hash: "0x9i0j1k2l...",
    icon: Building2,
    completed: true,
  },
  {
    stage: "Patient Delivery",
    location: "Pending",
    timestamp: "-",
    hash: "-",
    icon: CheckCircle,
    completed: false,
  },
];

export default function LotDetails() {
  const navigate = useNavigate();
  const { lotId } = useParams();

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <TopBar userRole="Manufacturer" onLogout={() => navigate("/")} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-foreground">Lot Details: {lotId}</h1>
            <p className="text-muted-foreground">Complete traceability path on the blockchain</p>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Product Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-sm text-muted-foreground">Product Name</p>
                  <p className="text-lg font-medium">Aspirin 500mg</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Current Status</p>
                  <Badge className="mt-1">In Transit</Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Batch Number</p>
                  <p className="text-lg font-medium">BATCH-2024-A123</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Expiry Date</p>
                  <p className="text-lg font-medium">2026-01-15</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Traceability Path</CardTitle>
              <CardDescription>Blockchain-verified journey from factory to patient</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative space-y-6">
                {traceabilityPath.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    {/* Timeline */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-full ${
                          step.completed
                            ? "bg-accent text-accent-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <step.icon className="h-6 w-6" />
                      </div>
                      {index < traceabilityPath.length - 1 && (
                        <div
                          className={`h-full w-0.5 ${
                            step.completed ? "bg-accent" : "bg-muted"
                          }`}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <div className="rounded-lg border border-border bg-card p-4">
                        <h3 className="font-semibold text-foreground">{step.stage}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{step.location}</p>
                        <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                          <span>⏰ {step.timestamp}</span>
                          <span className="font-mono">🔗 {step.hash}</span>
                        </div>
                      </div>
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

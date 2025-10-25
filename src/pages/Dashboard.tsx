import { TopBar } from "@/components/layout/TopBar";
import { Sidebar } from "@/components/layout/Sidebar";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { Package, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const recentActivity = [
  { id: 1, lot: "LOT-2024-001", status: "In Transit", location: "Distribution Center A", time: "2 hours ago" },
  { id: 2, lot: "LOT-2024-002", status: "Delivered", location: "Pharmacy B", time: "5 hours ago" },
  { id: 3, lot: "LOT-2024-003", status: "Manufacturing", location: "Factory C", time: "1 day ago" },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <TopBar userRole="Manufacturer" onLogout={() => navigate("/")} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
            <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
          </div>

          {/* Stats Grid */}
          <div className="mb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              title="Total Lots"
              value="1,284"
              icon={Package}
              trend={{ value: "12% from last month", positive: true }}
              variant="default"
            />
            <StatsCard
              title="Active Shipments"
              value="342"
              icon={TrendingUp}
              trend={{ value: "8% from last week", positive: true }}
              variant="success"
            />
            <StatsCard
              title="AI Alerts"
              value="23"
              icon={AlertTriangle}
              trend={{ value: "3% from yesterday", positive: false }}
              variant="warning"
            />
            <StatsCard
              title="Verified Deliveries"
              value="892"
              icon={CheckCircle}
              trend={{ value: "15% from last month", positive: true }}
              variant="success"
            />
          </div>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest updates from your supply chain</CardDescription>
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

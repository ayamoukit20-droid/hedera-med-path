import { TopBar } from "@/components/layout/TopBar";
import { Sidebar } from "@/components/layout/Sidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const lots = [
  { id: "LOT-2024-001", product: "Aspirin 500mg", status: "In Transit", location: "Distribution Center A", lastUpdate: "2024-01-15 14:30" },
  { id: "LOT-2024-002", product: "Amoxicillin 250mg", status: "Delivered", location: "Pharmacy B", lastUpdate: "2024-01-15 10:15" },
  { id: "LOT-2024-003", product: "Ibuprofen 400mg", status: "Manufacturing", location: "Factory C", lastUpdate: "2024-01-14 16:45" },
  { id: "LOT-2024-004", product: "Paracetamol 1g", status: "In Transit", location: "Distribution Center D", lastUpdate: "2024-01-15 12:00" },
  { id: "LOT-2024-005", product: "Metformin 850mg", status: "Verified", location: "Pharmacy E", lastUpdate: "2024-01-15 09:30" },
];

const statusColors: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
  "In Transit": "default",
  "Delivered": "secondary",
  "Manufacturing": "outline",
  "Verified": "secondary",
};

export default function LotsTracking() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <TopBar userRole="Manufacturer" onLogout={() => navigate("/")} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-foreground">Lots Tracking</h1>
            <p className="text-muted-foreground">Monitor all medicine lots in the supply chain</p>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>All Lots</CardTitle>
                  <CardDescription>Track and verify medicine authenticity</CardDescription>
                </div>
                <div className="relative w-64">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Search lots..." className="pl-9" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Lot ID</TableHead>
                    <TableHead>Product Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Last Update</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {lots.map((lot) => (
                    <TableRow key={lot.id}>
                      <TableCell className="font-medium">{lot.id}</TableCell>
                      <TableCell>{lot.product}</TableCell>
                      <TableCell>
                        <Badge variant={statusColors[lot.status] || "default"}>
                          {lot.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{lot.location}</TableCell>
                      <TableCell className="text-muted-foreground">{lot.lastUpdate}</TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => navigate(`/lot/${lot.id}`)}
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}

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
  { id: "LOT-2024-001", product: "Aspirine 500mg", status: "En transit", location: "Centre de distribution A", lastUpdate: "15/01/2024 14:30" },
  { id: "LOT-2024-002", product: "Amoxicilline 250mg", status: "Livré", location: "Pharmacie B", lastUpdate: "15/01/2024 10:15" },
  { id: "LOT-2024-003", product: "Ibuprofène 400mg", status: "Fabrication", location: "Usine C", lastUpdate: "14/01/2024 16:45" },
  { id: "LOT-2024-004", product: "Paracétamol 1g", status: "En transit", location: "Centre de distribution D", lastUpdate: "15/01/2024 12:00" },
  { id: "LOT-2024-005", product: "Metformine 850mg", status: "Vérifié", location: "Pharmacie E", lastUpdate: "15/01/2024 09:30" },
];

const statusColors: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
  "En transit": "default",
  "Livré": "secondary",
  "Fabrication": "outline",
  "Vérifié": "secondary",
};

export default function LotsTracking() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <TopBar userRole="Fabricant" onLogout={() => navigate("/")} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-foreground">Suivi des lots</h1>
            <p className="text-muted-foreground">Surveillez tous les lots de médicaments dans la chaîne d'approvisionnement</p>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Tous les lots</CardTitle>
                  <CardDescription>Suivez et vérifiez l'authenticité des médicaments</CardDescription>
                </div>
                <div className="relative w-64">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Rechercher des lots..." className="pl-9" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID du lot</TableHead>
                    <TableHead>Nom du produit</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Localisation</TableHead>
                    <TableHead>Dernière mise à jour</TableHead>
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
                          Voir les détails
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
